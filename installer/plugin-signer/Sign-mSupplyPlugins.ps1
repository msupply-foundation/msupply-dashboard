#Requires -Version 5.1
<#
Sign mSupply Plugins

Signs the plugins in data\plugins with a Grafana private signature for the
dashboard link (root_url), or removes the signature again. The build compiles
this script to "Sign mSupply Plugins.exe" in data\plugins\_sign. Grafana does
not load that folder, because it has no plugin.json.

The signature is the same one @grafana/sign-plugin makes: a manifest with the
SHA-256 of every file, sent to grafana.com and saved as MANIFEST.txt. The
token is only kept in memory while the window is open.
#>

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$Title       = 'Sign mSupply Plugins'
$SignUrl     = 'https://grafana.com/api/plugins/ci/sign'
$ServiceName = 'mSupply Dashboard'
$JunkFiles   = @('.DS_Store', 'Thumbs.db', 'desktop.ini')
$DataExt     = @('.db', '.sqlite', '.sqlite3', '.log')

# ---------- paths ----------

function Get-BaseDir {
    if ($PSScriptRoot) { return $PSScriptRoot }
    return [System.AppDomain]::CurrentDomain.BaseDirectory.TrimEnd('\')
}

$BaseDir    = Get-BaseDir
$PluginsDir = Split-Path $BaseDir -Parent
$AppFolder  = Split-Path (Split-Path $PluginsDir -Parent) -Parent
$CustomIni  = Join-Path $AppFolder 'conf\custom.ini'
$DefaultIni = Join-Path $AppFolder 'conf\defaults.ini'

# ---------- ini ----------

function Read-Ini([string]$Path) {
    $ini = @{}
    $section = ''
    if (-not (Test-Path -LiteralPath $Path)) { return $ini }
    foreach ($line in Get-Content -LiteralPath $Path) {
        $t = $line.Trim()
        if ($t -eq '' -or $t.StartsWith(';') -or $t.StartsWith('#')) { continue }
        if ($t -match '^\[(.+)\]$') { $section = $Matches[1].Trim(); continue }
        $i = $t.IndexOf('=')
        if ($i -gt 0) { $ini["$section.$($t.Substring(0, $i).Trim())"] = $t.Substring($i + 1).Trim() }
    }
    return $ini
}

$Custom   = Read-Ini $CustomIni
$Defaults = Read-Ini $DefaultIni

function Get-IniValue([string]$Key) {
    if ($Custom.ContainsKey($Key) -and $Custom[$Key] -ne '') { return $Custom[$Key] }
    if ($Defaults.ContainsKey($Key)) { return $Defaults[$Key] }
    return ''
}

function Get-RootUrl {
    $url = Get-IniValue 'server.root_url'
    # Grafana fills in these placeholders from the [server] section.
    foreach ($k in 'protocol', 'domain', 'http_port') {
        $url = $url.Replace("%($k)s", (Get-IniValue "server.$k"))
    }
    return $url
}

function Get-NormalUrl([string]$Text) {
    $u = $Text.Trim()
    if ($u -notmatch '^https?://[^/\s]+') { return $null }
    if (-not $u.EndsWith('/')) { $u += '/' }
    return $u
}

# ---------- plugin files ----------

function Get-Sha256([string]$Path) {
    return (Get-FileHash -Algorithm SHA256 -LiteralPath $Path).Hash.ToLower()
}

function Get-PluginFiles([string]$Dir) {
    $root = (Resolve-Path -LiteralPath $Dir).Path.TrimEnd('\')
    Get-ChildItem -LiteralPath $root -Recurse -File -Force | ForEach-Object {
        $_.FullName.Substring($root.Length + 1).Replace('\', '/')
    }
}

function Read-Manifest([string]$Path) {
    $t = [IO.File]::ReadAllText($Path)
    $a = $t.IndexOf('{')
    $b = $t.LastIndexOf('}')
    if ($a -lt 0 -or $b -le $a) { throw 'no JSON in MANIFEST.txt' }
    return $t.Substring($a, $b - $a + 1) | ConvertFrom-Json
}

function Get-ManifestFiles($Manifest) {
    $map = @{}
    if ($Manifest.files) {
        foreach ($p in $Manifest.files.PSObject.Properties) { $map[$p.Name] = [string]$p.Value }
    }
    return $map
}

function Get-PluginInfo([string]$Dir) {
    $r = [ordered]@{
        Dir = $Dir; Folder = (Split-Path $Dir -Leaf); Id = '?'; Version = '?'
        State = 'unsigned'; Text = 'not signed'; CanSign = $true; CanRemove = $false
    }
    try {
        $pj = Get-Content -LiteralPath (Join-Path $Dir 'plugin.json') -Raw | ConvertFrom-Json
        $r.Id = $pj.id
        $r.Version = $pj.info.version
    } catch {
        $r.State = 'block'; $r.Text = 'cannot read plugin.json'; $r.CanSign = $false
        return [pscustomobject]$r
    }

    $files = @(Get-PluginFiles $Dir | Where-Object { $_ -ne 'MANIFEST.txt' })
    $data = @($files | Where-Object { $DataExt -contains [IO.Path]::GetExtension($_).ToLower() })
    if ($data.Count -gt 0) {
        $r.State = 'block'; $r.Text = "data file in the folder: $($data[0])"; $r.CanSign = $false
        return [pscustomobject]$r
    }

    $mpath = Join-Path $Dir 'MANIFEST.txt'
    if (Test-Path -LiteralPath $mpath) {
        try {
            $m = Read-Manifest $mpath
        } catch {
            $r.State = 'warn'; $r.Text = 'MANIFEST.txt cannot be read'; $r.CanRemove = $true
            return [pscustomobject]$r
        }
        if ($m.signatureType -ne 'private') {
            $r.State = 'skip'; $r.CanSign = $false
            $r.Text = "signed by $($m.signedByOrgName) ($($m.signatureType)), do not change"
            return [pscustomobject]$r
        }
        $r.CanRemove = $true
        $mf = Get-ManifestFiles $m
        $real = @($files | Where-Object { $JunkFiles -notcontains (Split-Path $_ -Leaf) })
        $changed = @($real | Where-Object { -not $mf.ContainsKey($_) -or (Get-Sha256 (Join-Path $Dir $_)) -ne $mf[$_] })
        $urls = (@($m.rootUrls) | ForEach-Object { ([string]$_).TrimEnd('/') }) -join ', '
        if ($changed.Count -gt 0) {
            $r.State = 'warn'; $r.Text = "signed for $urls, but files changed after signing"
        } else {
            $r.State = 'signed'; $r.Text = "signed for $urls"
        }
    }
    return [pscustomobject]$r
}

function Find-Plugins {
    Get-ChildItem -LiteralPath $PluginsDir -Directory |
        Where-Object { $_.Name -ne '_sign' -and (Test-Path -LiteralPath (Join-Path $_.FullName 'plugin.json')) } |
        Sort-Object Name |
        ForEach-Object { Get-PluginInfo $_.FullName }
}

# ---------- grafana.com ----------

function Get-TokenProblem([string]$Token) {
    if (-not $Token) { return 'Paste the grafana.com token.' }
    if ($Token.StartsWith('eyJ')) {
        return 'This is an old grafana.com API key. It cannot sign plugins. Make an Access Policy token (it starts with glc_) with the plugins:write scope.'
    }
    if (-not $Token.StartsWith('glc_')) { return 'The token must start with glc_.' }
    if ($Token -match '\s') { return 'The token has a space or a new line in it. Copy it again.' }
    return $null
}

function Invoke-SignApi([string]$Token, [string]$Json) {
    try {
        $resp = Invoke-WebRequest -Uri $SignUrl -Method Post -UseBasicParsing -TimeoutSec 60 `
            -Headers @{ Authorization = "Bearer $Token" } -ContentType 'application/json' `
            -Body ([Text.Encoding]::UTF8.GetBytes($Json))
        $text = $resp.Content
        if ($text -is [byte[]]) { $text = [Text.Encoding]::UTF8.GetString($text) }
        return @{ Status = [int]$resp.StatusCode; Text = [string]$text }
    } catch [System.Net.WebException] {
        $r = $_.Exception.Response
        if ($r) {
            $reader = New-Object IO.StreamReader($r.GetResponseStream())
            return @{ Status = [int]$r.StatusCode; Text = $reader.ReadToEnd() }
        }
        return @{ Status = 0; Text = $_.Exception.Message }
    } catch {
        return @{ Status = 0; Text = $_.Exception.Message }
    }
}

function Test-Token([string]$Token, [string]$PluginId) {
    # A manifest with a wrong hash: 400/409/422 means the token was accepted
    # and nothing was signed.
    $json = @{ plugin = $PluginId; version = '0.0.0'; files = @{ 'plugin.json' = '00' }
               signatureType = 'private'; rootUrls = @('http://localhost:3000/') } | ConvertTo-Json -Depth 4 -Compress
    $r = Invoke-SignApi $Token $json
    if ($r.Status -in 200, 400, 409, 422) { return $null }
    if ($r.Status -eq 0) { return "Cannot connect to grafana.com ($($r.Text))." }
    return "grafana.com did not accept the token (HTTP $($r.Status)). Check that the Access Policy has the plugins:write scope. A new token can take a few minutes to work."
}

function Invoke-SignPlugin($Plugin, [string]$Url, [string]$Token) {
    $dir = $Plugin.Dir
    $mpath = Join-Path $dir 'MANIFEST.txt'
    $old = $null
    if (Test-Path -LiteralPath $mpath) { $old = [IO.File]::ReadAllBytes($mpath) }

    foreach ($j in $JunkFiles) {
        Get-ChildItem -LiteralPath $dir -Recurse -File -Force -Filter $j | Remove-Item -Force
    }
    $files = [ordered]@{}
    foreach ($f in (Get-PluginFiles $dir | Where-Object { $_ -ne 'MANIFEST.txt' } | Sort-Object)) {
        $files[$f] = Get-Sha256 (Join-Path $dir $f)
    }
    $json = [ordered]@{ plugin = $Plugin.Id; version = $Plugin.Version; files = $files
                        signatureType = 'private'; rootUrls = @($Url) } | ConvertTo-Json -Depth 5 -Compress

    $r = Invoke-SignApi $Token $json
    if ($r.Status -ne 200) {
        return "grafana.com answered HTTP $($r.Status): $($r.Text.Substring(0, [Math]::Min(200, $r.Text.Length)))"
    }
    [IO.File]::WriteAllText($mpath, $r.Text, (New-Object Text.UTF8Encoding($false)))

    # Check the new manifest before trusting it.
    $problem = $null
    try {
        $m = Read-Manifest $mpath
        $mf = Get-ManifestFiles $m
        if (@($mf.Keys).Count -ne $files.Count) { $problem = 'the new MANIFEST does not list all the files' }
        foreach ($k in $files.Keys) { if ($mf[$k] -ne $files[$k]) { $problem = 'a hash in the new MANIFEST is wrong' } }
        if (@($m.rootUrls).Count -ne 1 -or [string]$m.rootUrls[0] -ne $Url) { $problem = 'the link in the new MANIFEST is wrong' }
    } catch {
        $problem = 'the new MANIFEST cannot be read'
    }
    if ($problem) {
        if ($old) { [IO.File]::WriteAllBytes($mpath, $old) } else { Remove-Item -LiteralPath $mpath -Force }
        return $problem
    }
    return $null
}

# ---------- service ----------

function Restart-Dashboard([scriptblock]$Log) {
    $logDir = Get-IniValue 'paths.logs'
    if (-not $logDir) { $logDir = 'data/log' }
    if (-not [IO.Path]::IsPathRooted($logDir)) { $logDir = Join-Path $AppFolder $logDir }
    $logFile = Join-Path $logDir 'grafana.log'
    $start = 0
    if (Test-Path -LiteralPath $logFile) { $start = (Get-Item -LiteralPath $logFile).Length }

    & $Log "Restarting the '$ServiceName' service..."
    Restart-Service -Name $ServiceName -Force -ErrorAction Stop

    $protocol = Get-IniValue 'server.protocol'
    if (-not $protocol) { $protocol = 'http' }
    $port = Get-IniValue 'server.http_port'
    if (-not $port) { $port = '3000' }
    if ($protocol -eq 'https') { [Net.ServicePointManager]::ServerCertificateValidationCallback = { $true } }
    $health = "${protocol}://localhost:$port/api/health"

    $ok = $false
    for ($i = 0; $i -lt 60 -and -not $ok; $i++) {
        [System.Windows.Forms.Application]::DoEvents()
        Start-Sleep -Seconds 2
        try { $ok = (Invoke-WebRequest -Uri $health -UseBasicParsing -TimeoutSec 5).StatusCode -eq 200 } catch { }
    }
    if (-not $ok) { & $Log "The dashboard did not answer on $health after 2 minutes. Look at $logFile."; return $null }
    & $Log 'The dashboard is running again.'

    if (-not (Test-Path -LiteralPath $logFile)) { return @() }
    $fs = [IO.File]::Open($logFile, 'Open', 'Read', 'ReadWrite')
    try {
        if ($start -gt $fs.Length) { $start = 0 }
        [void]$fs.Seek($start, 'Begin')
        $text = (New-Object IO.StreamReader($fs)).ReadToEnd()
    } finally { $fs.Dispose() }
    return @($text -split "`r?`n" | Where-Object { $_ -match 'signature' -or $_ -match 'level=error' })
}

# ---------- window ----------

$form = New-Object Windows.Forms.Form
$form.Text = $Title
$form.Size = New-Object Drawing.Size(760, 620)
$form.StartPosition = 'CenterScreen'
$form.Font = New-Object Drawing.Font('Segoe UI', 9)
$form.MinimumSize = $form.Size

function Add-Control($Control, [int]$X, [int]$Y, [int]$W, [int]$H) {
    $Control.Location = New-Object Drawing.Point($X, $Y)
    $Control.Size = New-Object Drawing.Size($W, $H)
    $form.Controls.Add($Control)
    return $Control
}

$intro = New-Object Windows.Forms.Label
$intro.Text = "This app signs the mSupply plugins for this dashboard link. Grafana then loads them without the allow_loading_unsigned_plugins line.`r`nYou need a grafana.com token (it starts with glc_). The app does not save the token."
[void](Add-Control $intro 12 10 720 40)

$lblUrl = New-Object Windows.Forms.Label
$lblUrl.Text = 'Dashboard link (root_url in conf\custom.ini):'
[void](Add-Control $lblUrl 12 56 400 18)
$tbUrl = New-Object Windows.Forms.TextBox
[void](Add-Control $tbUrl 12 76 720 24)
$tbUrl.Text = Get-RootUrl

$lblTok = New-Object Windows.Forms.Label
$lblTok.Text = 'grafana.com token:'
[void](Add-Control $lblTok 12 108 400 18)
$tbTok = New-Object Windows.Forms.TextBox
$tbTok.UseSystemPasswordChar = $true
[void](Add-Control $tbTok 12 128 720 24)

$list = New-Object Windows.Forms.ListView
$list.View = 'Details'
$list.CheckBoxes = $true
$list.FullRowSelect = $true
[void]$list.Columns.Add('Plugin', 260)
[void]$list.Columns.Add('Version', 70)
[void]$list.Columns.Add('Now', 380)
[void](Add-Control $list 12 162 720 170)

$btnSign = New-Object Windows.Forms.Button
$btnSign.Text = 'Sign'
[void](Add-Control $btnSign 12 342 120 30)
$btnRemove = New-Object Windows.Forms.Button
$btnRemove.Text = 'Remove signature'
[void](Add-Control $btnRemove 142 342 140 30)
$btnClose = New-Object Windows.Forms.Button
$btnClose.Text = 'Close'
[void](Add-Control $btnClose 612 342 120 30)

$tbLog = New-Object Windows.Forms.TextBox
$tbLog.Multiline = $true
$tbLog.ReadOnly = $true
$tbLog.ScrollBars = 'Vertical'
[void](Add-Control $tbLog 12 382 720 186)

$anchorTop = [Windows.Forms.AnchorStyles]'Top, Left, Right'
foreach ($c in $intro, $tbUrl, $tbTok) { $c.Anchor = $anchorTop }
$list.Anchor = $anchorTop
$tbLog.Anchor = [Windows.Forms.AnchorStyles]'Top, Bottom, Left, Right'
$btnClose.Anchor = [Windows.Forms.AnchorStyles]'Top, Right'

$Log = {
    param([string]$Line)
    $tbLog.AppendText($Line + "`r`n")
    [System.Windows.Forms.Application]::DoEvents()
}

$script:Plugins = @()

function Update-List {
    $list.Items.Clear()
    $script:Plugins = @(Find-Plugins)
    foreach ($p in $script:Plugins) {
        $item = New-Object Windows.Forms.ListViewItem($p.Id)
        [void]$item.SubItems.Add([string]$p.Version)
        [void]$item.SubItems.Add($p.Text)
        $item.Tag = $p
        $item.Checked = ($p.CanSign -and $p.Id -match 'msupply')
        if (-not $p.CanSign -and -not $p.CanRemove) { $item.ForeColor = [Drawing.Color]::Gray }
        [void]$list.Items.Add($item)
    }
}

function Get-Checked {
    @($list.Items | Where-Object { $_.Checked } | ForEach-Object { $_.Tag })
}

function Set-Busy([bool]$Busy) {
    foreach ($c in $btnSign, $btnRemove, $btnClose, $list, $tbUrl, $tbTok) { $c.Enabled = -not $Busy }
    $form.Cursor = if ($Busy) { [Windows.Forms.Cursors]::WaitCursor } else { [Windows.Forms.Cursors]::Default }
}

function Show-Message([string]$Text, [string]$Icon = 'Information') {
    [void][Windows.Forms.MessageBox]::Show($form, $Text, $Title, 'OK', $Icon)
}

function Show-RestartResult($Lines) {
    if ($null -eq $Lines) { return }
    if ($Lines.Count -eq 0) { & $Log 'No plugin signature errors in the Grafana log.'; return }
    & $Log 'Grafana log after the restart:'
    foreach ($l in $Lines | Select-Object -First 20) { & $Log "  $l" }
}

$btnSign.Add_Click({
    $todo = @(Get-Checked | Where-Object { $_.CanSign })
    if ($todo.Count -eq 0) { Show-Message 'Tick at least one plugin that can be signed.' 'Warning'; return }

    $url = Get-NormalUrl $tbUrl.Text
    if (-not $url) { Show-Message 'The link must start with http:// or https://' 'Warning'; return }
    $iniUrl = Get-NormalUrl (Get-RootUrl)
    if ($iniUrl -and $iniUrl -ne $url) {
        $a = [Windows.Forms.MessageBox]::Show($form,
            "This link is not the same as root_url in custom.ini:`r`n`r`n  $iniUrl`r`n`r`nGrafana only accepts the signature for its own root_url. Sign anyway?",
            $Title, 'YesNo', 'Warning')
        if ($a -ne 'Yes') { return }
    }

    $token = $tbTok.Text.Trim()
    $problem = Get-TokenProblem $token
    if ($problem) { Show-Message $problem 'Warning'; return }

    Set-Busy $true
    try {
        $tbLog.Clear()
        & $Log "Link: $url"
        & $Log 'Testing the token...'
        $problem = Test-Token $token $todo[0].Id
        if ($problem) { & $Log $problem; Show-Message $problem 'Warning'; return }

        $done = 0
        foreach ($p in $todo) {
            & $Log "Signing $($p.Id)..."
            $err = Invoke-SignPlugin $p $url $token
            if ($err) { & $Log "  FAILED: $err" } else { & $Log '  signed'; $done++ }
        }
        $token = $null
        $tbTok.Clear()
        & $Log "$done of $($todo.Count) signed."
        if ($done -gt 0) { Show-RestartResult (Restart-Dashboard $Log) }
        Update-List
    } catch {
        & $Log "ERROR: $($_.Exception.Message)"
    } finally {
        Set-Busy $false
    }
})

$btnRemove.Add_Click({
    $todo = @(Get-Checked | Where-Object { $_.CanRemove })
    if ($todo.Count -eq 0) { Show-Message 'Tick at least one plugin that has an mSupply signature.' 'Warning'; return }
    $names = ($todo | ForEach-Object { $_.Id }) -join "`r`n  "
    $a = [Windows.Forms.MessageBox]::Show($form,
        "Remove the signature from:`r`n`r`n  $names`r`n`r`nThey will load as unsigned plugins, so they must be in allow_loading_unsigned_plugins in custom.ini.",
        $Title, 'YesNo', 'Question')
    if ($a -ne 'Yes') { return }

    Set-Busy $true
    try {
        $tbLog.Clear()
        foreach ($p in $todo) {
            Remove-Item -LiteralPath (Join-Path $p.Dir 'MANIFEST.txt') -Force
            & $Log "Signature removed: $($p.Id)"
        }
        Show-RestartResult (Restart-Dashboard $Log)
        Update-List
    } catch {
        & $Log "ERROR: $($_.Exception.Message)"
    } finally {
        Set-Busy $false
    }
})

$btnClose.Add_Click({ $form.Close() })

$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(
    [Security.Principal.WindowsBuiltInRole]::Administrator)

$form.Add_Shown({
    if (-not (Test-Path -LiteralPath $CustomIni)) {
        Show-Message "conf\custom.ini was not found in $AppFolder. Run this app from data\plugins\_sign in the dashboard folder." 'Error'
        $form.Close()
        return
    }
    if (-not $isAdmin) {
        Show-Message 'Run this app as administrator. It changes files in the dashboard folder and restarts the service.' 'Warning'
    }
    Update-List
    & $Log "Plugins folder: $PluginsDir"
})

[void]$form.ShowDialog()

#Requires -Version 5.1
<#
mSupply Dashboard Install Assistant

Install, upgrade or repair the mSupply Dashboard on Windows, step by step,
with a plan you see before anything changes.

  1. Check   : reads the install, versions, PostgreSQL, plugins, custom.ini
               and grafana.db counts. Changes nothing.
  2. Plan    : scenario (NEW, MIGRATE, UPDATE, REPAIR) and each step with
               DO or SKIP and the reason.
  3. Run     : each step waits for "Run step", "Skip step" or "Stop".
               Every fix counts first and does nothing when there is
               nothing to fix.

The log keeps counts and plugin ids only, never names or rows.

Window (default, also when compiled to .exe with ps2exe):
  dashboard-install-assistant.ps1
Text mode:
  dashboard-install-assistant.ps1 -Console -Setup .\dashboard-setup-v13.2.2.build.1.exe [-PlanOnly]
  dashboard-install-assistant.ps1 -Console -Rollback -BackupDir C:\mSupply-upgrade-backup\<date>
#>
param(
  [string]$Setup,
  [switch]$Console,
  [switch]$PlanOnly,
  [switch]$Yes,
  [string]$DbUser = 'postgres',
  [int]$DbPort = 5432,
  [string]$DbName = 'dashboard',
  [string]$DbHost = 'localhost',
  [string]$BackupRoot = 'C:\mSupply-upgrade-backup',
  [int]$MigrationTimeoutMin = 30,
  [switch]$Rollback,
  [string]$BackupDir
)

$ErrorActionPreference = 'Stop'
$AppTitle = 'mSupply Dashboard Install Assistant'

# grafanadb-update.bat and db-init.bat have this path inside, so it is fixed.
$AppDir      = 'C:\Program Files\mSupply Dashboard'
$ServiceName = 'mSupply Dashboard'
$ServiceReg  = "HKLM:\SYSTEM\CurrentControlSet\Services\$ServiceName\Parameters"
$GrafanaDb   = Join-Path $AppDir 'data\grafana.db'
$CustomIni   = Join-Path $AppDir 'conf\custom.ini'
$PluginsDir  = Join-Path $AppDir 'data\plugins'
$GrafanaLog  = Join-Path $AppDir 'data\log\grafana.log'
$ProvDir     = Join-Path $AppDir 'conf\provisioning'

# Every id our plugins have had. Folders with these ids are moved out before
# the setup, so an old copy cannot win over the new one.
$OurPluginIds = @(
  'msupply-table', 'msupplyfoundation-table',
  'm-supply-foundation-msupply-regionmap', 'msupplyfoundation-msupply-regionmap',
  'm-supply-foundation-msupply-worldmap'
)
# Plugins no longer in the build. Moved out only when not in use.
$ObsoletePluginIds = @(
  'msupplyfoundation-datasource'   # report scheduler; the table export also uses it
)
# Plugins the build ships unsigned.
$UnsignedIds = @(
  'msupplyfoundation-table',
  'msupplyfoundation-msupply-regionmap',
  'm-supply-foundation-msupply-worldmap'
)
# Old panel type -> new panel type (same options, only the name changed).
$PanelTypeMap = [ordered]@{
  'm-supply-foundation-msupply-regionmap' = 'msupplyfoundation-msupply-regionmap'
  'msupply-table'                          = 'msupplyfoundation-table'
}
# Keys this version needs in custom.ini.
$IniKeys = @(
  @('plugins',   'preinstall_disabled',    'true'),
  @('news',      'news_feed_enabled',      'false'),
  @('analytics', 'reporting_enabled',      'false'),
  @('analytics', 'feedback_links_enabled', 'false')
)

function Get-BaseDir {
  if ($PSScriptRoot) { return $PSScriptRoot }
  return [System.AppDomain]::CurrentDomain.BaseDirectory.TrimEnd('\')
}
$BaseDir = Get-BaseDir

$script:Ui = $null            # window controls, $null in text mode
$script:Choice = $null        # R = run, S = skip, Q = stop
$script:StopAsked = $false
$script:LogFile = $null
$script:Early = New-Object System.Collections.Generic.List[string]
$script:Bk = $null
$script:TmpDir = $env:TEMP
$script:Pg = $null
$script:Pw = $null
$script:SetupPath = $Setup
$script:RollbackDir = $BackupDir
$script:StepItems = @{}
$script:StepState = @{}
$script:CurStep = $null

# =================================================================== ui-aware basics

function Invoke-Pump { if ($script:Ui) { [System.Windows.Forms.Application]::DoEvents() } }

# Sleep without freezing the window. Stop is checked here.
function Wait-Sec([double]$Seconds) {
  $until = (Get-Date).AddSeconds($Seconds)
  do {
    if ($script:StopAsked) { Fail 'Stopped by user.' }
    if ($script:Ui) { [System.Windows.Forms.Application]::DoEvents(); Start-Sleep -Milliseconds 50 }
    else { Start-Sleep -Milliseconds 200 }
  } while ((Get-Date) -lt $until)
}

function Get-UiColor([string]$c) {
  switch ($c) {
    'Green'    { return [System.Drawing.Color]::DarkGreen }
    'Red'      { return [System.Drawing.Color]::Firebrick }
    'Yellow'   { return [System.Drawing.Color]::DarkOrange }
    'Cyan'     { return [System.Drawing.Color]::SteelBlue }
    'DarkGray' { return [System.Drawing.Color]::Gray }
    default    { return [System.Drawing.Color]::Black }
  }
}

function Log([string]$msg, [string]$color = 'Gray') {
  $line = '{0}  {1}' -f (Get-Date -Format 'HH:mm:ss'), $msg
  if ($script:LogFile) { Add-Content -Path $script:LogFile -Value $line -Encoding UTF8 }
  else { $script:Early.Add($line) }
  if ($script:Ui) {
    $rt = $script:Ui.Log
    $rt.SelectionStart = $rt.TextLength
    $rt.SelectionLength = 0
    $rt.SelectionColor = Get-UiColor $color
    $rt.AppendText($line + "`r`n")
    $rt.ScrollToCaret()
    Invoke-Pump
  } else {
    Write-Host $line -ForegroundColor $color
  }
}
function Title([string]$msg) { Log ''; Log "=== $msg" 'Cyan' }
function Fail([string]$msg) { throw $msg }

function Start-LogFile([string]$Path) {
  $script:LogFile = $Path
  if ($script:Early.Count -gt 0) { Add-Content -Path $Path -Value $script:Early -Encoding UTF8; $script:Early.Clear() }
}

function Confirm-Yes([string]$Question) {
  if ($Yes) { return $true }
  if ($script:Ui) {
    $r = [System.Windows.Forms.MessageBox]::Show($script:Ui.Form, $Question, $AppTitle, 'YesNo', 'Warning')
    return ($r -eq 'Yes')
  }
  return ((Read-Host "$Question  Type YES") -eq 'YES')
}

# Ask before a step. Returns $true to run, $false to skip; Stop throws.
function Confirm-Step([string]$what) {
  if ($Yes) { return $true }
  if ($script:Ui) {
    $u = $script:Ui
    $u.Next.Text = "Next: $what"
    $script:Choice = $null
    $u.Run.Enabled = $true; $u.Skip.Enabled = $true
    [void]$u.Run.Focus()
    while ($null -eq $script:Choice) {
      [System.Windows.Forms.Application]::DoEvents()
      Start-Sleep -Milliseconds 50
      if ($u.Form.IsDisposed) { $script:Choice = 'Q' }
    }
    $u.Run.Enabled = $false; $u.Skip.Enabled = $false
    $u.Next.Text = ''
    $a = $script:Choice
  } else {
    $a = $null
    while ($a -notin @('R', 'S', 'Q')) {
      $in = (Read-Host "  -> $what  [Enter = run, S = skip, Q = stop]").Trim().ToUpper()
      if ($in -eq '') { $a = 'R' } else { $a = $in }
    }
  }
  switch ($a) {
    'R' { return $true }
    'S' { Log "Skipped by user: $what" 'Yellow'; Set-StepStatus $script:CurStep 'skipped'; return $false }
    default { Fail 'Stopped by user.' }
  }
}

function Set-StepStatus([string]$Name, [string]$Status) {
  if (-not $Name) { return }
  $script:StepState[$Name] = $Status
  if ($script:Ui -and $script:StepItems.ContainsKey($Name)) {
    $it = $script:StepItems[$Name]
    $it.SubItems[2].Text = $Status
    switch ($Status) {
      'running' { $it.ForeColor = [System.Drawing.Color]::SteelBlue; $it.EnsureVisible() }
      'done'    { $it.ForeColor = [System.Drawing.Color]::DarkGreen }
      'skipped' { $it.ForeColor = [System.Drawing.Color]::DarkOrange }
      'failed'  { $it.ForeColor = [System.Drawing.Color]::Firebrick }
      'no change' { $it.ForeColor = [System.Drawing.Color]::Gray }
    }
    Invoke-Pump
  }
}

function Close-Step {
  if ($script:CurStep -and $script:StepState[$script:CurStep] -eq 'running') { Set-StepStatus $script:CurStep 'done' }
  $script:CurStep = $null
}

function Test-StepOn($p, [string]$name) { [bool](@($p.Steps | Where-Object { $_.Name -eq $name -and $_.On }).Count) }

# Start a step of the plan if it is DO. Marks the previous one done.
function Enter-Step($p, [string]$name) {
  if (-not (Test-StepOn $p $name)) { return $false }
  Close-Step
  $script:CurStep = $name
  Set-StepStatus $name 'running'
  Title $name
  return $true
}

# =================================================================== processes

# Windows command-line quoting for one argument.
function ConvertTo-Arg([string]$a) {
  if ($a -eq '') { return '""' }
  if ($a -notmatch '[\s"]') { return $a }
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.Append('"')
  $bs = 0
  foreach ($ch in $a.ToCharArray()) {
    if ($ch -eq '\') { $bs++ }
    elseif ($ch -eq '"') { [void]$sb.Append('\' * (2 * $bs + 1)); [void]$sb.Append('"'); $bs = 0 }
    else { if ($bs) { [void]$sb.Append('\' * $bs) }; [void]$sb.Append($ch); $bs = 0 }
  }
  if ($bs) { [void]$sb.Append('\' * (2 * $bs)) }
  [void]$sb.Append('"')
  return $sb.ToString()
}

# Run a program, keep the window alive, return exit code and output lines.
function Invoke-Exe([string]$Exe, [string[]]$ArgList, [string]$WorkDir) {
  $psi = New-Object System.Diagnostics.ProcessStartInfo
  $psi.FileName = $Exe
  $psi.Arguments = (@($ArgList | ForEach-Object { ConvertTo-Arg $_ }) -join ' ')
  $psi.UseShellExecute = $false
  $psi.RedirectStandardOutput = $true
  $psi.RedirectStandardError = $true
  $psi.CreateNoWindow = $true
  if ($WorkDir) { $psi.WorkingDirectory = $WorkDir }
  $proc = [System.Diagnostics.Process]::Start($psi)
  $o = $proc.StandardOutput.ReadToEndAsync()
  $e = $proc.StandardError.ReadToEndAsync()
  while (-not $proc.HasExited) {
    if ($script:Ui) { [System.Windows.Forms.Application]::DoEvents(); Start-Sleep -Milliseconds 50 }
    else { Start-Sleep -Milliseconds 100 }
  }
  $proc.WaitForExit()
  $lines = @(($o.Result + "`n" + $e.Result) -split "`r?`n" | Where-Object { $_ -ne '' })
  return [pscustomobject]@{ Code = $proc.ExitCode; Out = $lines }
}

function Get-Md5([string]$Path) { (Get-FileHash -Path $Path -Algorithm MD5).Hash }

function Get-Svc { Get-Service -Name $ServiceName -ErrorAction SilentlyContinue }

function Stop-Dashboard {
  $svc = Get-Svc
  if ($svc -and $svc.Status -ne 'Stopped') {
    if ($svc.Status -ne 'StopPending') { $svc.Stop() }
    $until = (Get-Date).AddMinutes(3)
    do { Wait-Sec 1; $svc.Refresh() } while ($svc.Status -ne 'Stopped' -and (Get-Date) -lt $until)
    if ($svc.Status -ne 'Stopped') { Fail 'The service did not stop in 3 minutes.' }
  }
  Log 'Service stopped.'
}

function Start-Dashboard {
  $svc = Get-Svc
  if ($svc.Status -ne 'Running') {
    if ($svc.Status -ne 'StartPending') { $svc.Start() }
    $until = (Get-Date).AddMinutes(2)
    do { Wait-Sec 1; $svc.Refresh() } while ($svc.Status -ne 'Running' -and (Get-Date) -lt $until)
    if ($svc.Status -ne 'Running') { Fail 'The service did not start in 2 minutes.' }
  }
  Log 'Service started.'
}

function Enable-AnyCert {
  # The certificate is for the public domain, not 127.0.0.1.
  if (-not ('TrustAllCerts' -as [type])) {
    Add-Type @'
using System.Net; using System.Security.Cryptography.X509Certificates;
public class TrustAllCerts : ICertificatePolicy {
  public bool CheckValidationResult(ServicePoint s, X509Certificate c, WebRequest r, int p) { return true; }
}
'@
  }
  [Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCerts
  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
}

function Get-ServerUrl {
  $proto = $null; $port = $null
  if (Test-Path $CustomIni) {
    $lines = Get-Content -Path $CustomIni
    $proto = Get-IniValue $lines 'server' 'protocol'
    $port  = Get-IniValue $lines 'server' 'http_port'
  }
  if (-not $proto) { $proto = 'http' }
  if (-not $port)  { $port = '3000' }
  return '{0}://127.0.0.1:{1}' -f $proto, $port
}

function Get-Health {
  try {
    $r = Invoke-WebRequest -Uri ((Get-ServerUrl) + '/api/health') -UseBasicParsing -TimeoutSec 3
    if ($r.StatusCode -eq 200) { return ($r.Content | ConvertFrom-Json) }
  } catch { }
  return $null
}

# The first start of a new major version migrates grafana.db: can take minutes.
function Wait-Health([int]$TimeoutMin) {
  $until = (Get-Date).AddMinutes($TimeoutMin)
  Log "Waiting for the dashboard to answer (max $TimeoutMin min)..."
  while ((Get-Date) -lt $until) {
    $h = Get-Health
    if ($h) { Log "Dashboard answers: database=$($h.database) version=$($h.version)" 'Green'; return $h }
    if ((Get-Svc).Status -eq 'Stopped') { Fail 'The service stopped by itself. Look at data\log\grafana.log.' }
    Wait-Sec 5
  }
  Fail "No answer from the dashboard after $TimeoutMin min."
}

# =================================================================== postgres / sqlite

function Find-PgBin {
  $dir = Get-ChildItem 'C:\Program Files\PostgreSQL' -Directory -ErrorAction SilentlyContinue |
    Where-Object { Test-Path (Join-Path $_.FullName 'bin\psql.exe') } |
    Sort-Object { $_.Name -as [double] } -Descending | Select-Object -First 1
  if (-not $dir) { return $null }
  return [pscustomobject]@{ Version = $dir.Name; Bin = (Join-Path $dir.FullName 'bin') }
}

function Invoke-Psql([string]$Sql) {
  $r = Invoke-Exe (Join-Path $script:Pg.Bin 'psql.exe') @('-h', $DbHost, '-p', "$DbPort", '-U', $DbUser, '-d', $DbName,
    '-w', '-X', '-q', '-A', '-t', '-v', 'ON_ERROR_STOP=1', '-c', $Sql)
  if ($r.Code -ne 0) { Fail ('psql failed: ' + (($r.Out | Select-Object -Last 3) -join ' ')) }
  return $r.Out
}

# One line per function, procedure and view in schema public: name + md5 of
# its code. Shows if db-init replaced anything, without showing any data.
function Get-PgFingerprint {
  @(Invoke-Psql @'
select 'fn:' || p.proname || ':' || md5(coalesce(p.prosrc, ''))
from pg_proc p join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
union all
select 'view:' || c.relname || ':' || md5(pg_get_viewdef(c.oid))
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relkind in ('v', 'm')
order by 1
'@ | Where-Object { $_ -match '^(fn|view):' })
}

function Find-Sqlite {
  $p = Join-Path $AppDir 'bin\sqlite3.exe'
  if (Test-Path $p) { return $p }
  $c = Get-Command sqlite3.exe -ErrorAction SilentlyContinue
  if ($c) { return $c.Source }
  return $null
}

function Invoke-Sqlite([string]$Sql) {
  $sqlite = Find-Sqlite
  if (-not $sqlite) { Fail 'sqlite3.exe not found.' }
  $tmp = Join-Path $script:TmpDir ('dash_' + [guid]::NewGuid().ToString('N') + '.sql')
  [IO.File]::WriteAllText($tmp, $Sql, (New-Object Text.UTF8Encoding $false))
  try {
    $r = Invoke-Exe $sqlite @('-batch', $GrafanaDb, (".read '{0}'" -f ($tmp -replace '\\', '/')))
  } finally { Remove-Item $tmp -Force -ErrorAction SilentlyContinue }
  if ($r.Code -ne 0) { Fail ('sqlite3 failed: ' + ($r.Out -join ' ')) }
  return $r.Out
}

# Counts in grafana.db. Each value is a number, or $null if it cannot be read.
function Get-DbCounts {
  $c = [ordered]@{ OAuthUsers = $null; OAuthMissing = $null; LegacyDs = $null; DsNoDb = $null; OldPanels = $null }
  if (-not (Find-Sqlite) -or -not (Test-Path $GrafanaDb)) { return $c }
  $o = ($PanelTypeMap.Keys | ForEach-Object {
    "(select count(*) from dashboard where instr(data, '""type"":""$_""') > 0)"
  }) -join ' + '
  $sql = @"
select count(*) from user_auth where auth_module = 'oauth_generic_oauth';
select count(*) from user_auth where auth_module = 'oauth_generic_oauth' and coalesce(auth_id, '') = '';
select count(*) from data_source where type = 'postgres';
select count(*) from data_source where type in ('postgres', 'grafana-postgresql-datasource')
  and coalesce(database, '') <> '' and coalesce(json_extract(json_data, '`$.database'), '') = '';
select $o;
"@
  try {
    $v = @(Invoke-Sqlite $sql | Where-Object { $_ -match '^\d+$' })
    if ($v.Count -eq 5) {
      $c.OAuthUsers = [int]$v[0]; $c.OAuthMissing = [int]$v[1]; $c.LegacyDs = [int]$v[2]
      $c.DsNoDb = [int]$v[3]; $c.OldPanels = [int]$v[4]
    }
  } catch { Log "Could not read grafana.db counts: $($_.Exception.Message)" 'Yellow' }
  return $c
}

# =================================================================== custom.ini (text edit, comments and order stay)

function Get-SectionRange([string[]]$Lines, [string]$Section) {
  $head = '^\s*\[\s*' + [regex]::Escape($Section) + '\s*\]\s*$'
  for ($i = 0; $i -lt $Lines.Count; $i++) {
    if ($Lines[$i] -match $head) {
      $end = $Lines.Count
      for ($j = $i + 1; $j -lt $Lines.Count; $j++) { if ($Lines[$j] -match '^\s*\[') { $end = $j; break } }
      return @($i, $end)
    }
  }
  return $null
}

function Get-IniValue([string[]]$Lines, [string]$Section, [string]$Key) {
  $range = Get-SectionRange $Lines $Section
  if (-not $range) { return $null }
  $kre = '^\s*' + [regex]::Escape($Key) + '\s*=\s*(.*)$'
  for ($i = $range[0] + 1; $i -lt $range[1]; $i++) { if ($Lines[$i] -match $kre) { return $Matches[1].Trim() } }
  return $null
}

function Set-IniValue([string[]]$Lines, [string]$Section, [string]$Key, [string]$Value) {
  $list = New-Object System.Collections.Generic.List[string]
  if ($Lines) { $list.AddRange([string[]]$Lines) }
  $newLine = "$Key = $Value"
  $range = Get-SectionRange $list.ToArray() $Section
  if (-not $range) { $list.Add(''); $list.Add("[$Section]"); $list.Add($newLine); return $list.ToArray() }
  $kre = '^\s*' + [regex]::Escape($Key) + '\s*='
  for ($i = $range[0] + 1; $i -lt $range[1]; $i++) {
    if ($list[$i] -match $kre) { $list[$i] = $newLine; return $list.ToArray() }
  }
  $list.Insert($range[0] + 1, $newLine)
  return $list.ToArray()
}

function Save-Ini([string[]]$Lines) {
  [IO.File]::WriteAllLines($CustomIni, $Lines, (New-Object Text.UTF8Encoding $false))
}

function Get-IniGaps([string[]]$Lines) {
  $gaps = @()
  $allow = Get-IniValue $Lines 'plugins' 'allow_loading_unsigned_plugins'
  $ids = @(); if ($allow) { $ids = $allow.Trim('"') -split ',' | ForEach-Object { $_.Trim() } }
  foreach ($id in $UnsignedIds) { if ($ids -notcontains $id) { $gaps += "unsigned list: $id" } }
  foreach ($k in $IniKeys) { if ((Get-IniValue $Lines $k[0] $k[1]) -ne $k[2]) { $gaps += "[$($k[0])] $($k[1])" } }
  return $gaps
}

function Repair-Ini([string[]]$Lines) {
  $allow = Get-IniValue $Lines 'plugins' 'allow_loading_unsigned_plugins'
  $ids = @(); if ($allow) { $ids = $allow.Trim('"') -split ',' | ForEach-Object { $_.Trim() } | Where-Object { $_ } }
  foreach ($id in $UnsignedIds) { if ($ids -notcontains $id) { $ids += $id } }
  $Lines = Set-IniValue $Lines 'plugins' 'allow_loading_unsigned_plugins' ($ids -join ',')
  foreach ($k in $IniKeys) { $Lines = Set-IniValue $Lines $k[0] $k[1] $k[2] }
  return $Lines
}

# =================================================================== plugins and log

function Get-Plugins {
  $list = @()
  Get-ChildItem $PluginsDir -Directory -ErrorAction SilentlyContinue | ForEach-Object {
    $pj = Get-ChildItem $_.FullName -Filter plugin.json -Recurse -Depth 2 -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($pj) {
      $id = $null; $type = $null; $ver = $null
      try { $j = Get-Content $pj.FullName -Raw | ConvertFrom-Json; $id = $j.id; $type = $j.type; $ver = $j.info.version } catch { }
      $mod = Get-ChildItem $pj.DirectoryName -Filter module.js -ErrorAction SilentlyContinue | Select-Object -First 1
      $angular = $false
      if ($mod) { $angular = [bool](Select-String -Path $mod.FullName -Pattern 'PanelCtrl|QueryCtrl|angular\.module' -Quiet) }
      $list += [pscustomobject]@{ Id = $id; Type = $type; Version = $ver; Folder = $_.Name; Path = $_.FullName
        Ours = ($OurPluginIds -contains $id); Obsolete = ($ObsoletePluginIds -contains $id); Angular = $angular }
    }
  }
  return $list
}

# Datasources in public\app\plugins\datasource left by an older version (the
# setup copies over and never deletes): the real one is in plugins-bundled, or
# its program is missing (for example parca, gone in 13).
function Get-StaleCoreDatasources {
  $bundled = @{}
  Get-ChildItem (Join-Path $AppDir 'data\plugins-bundled') -Filter plugin.json -Recurse -Depth 2 -ErrorAction SilentlyContinue | ForEach-Object {
    try { $bundled[(Get-Content $_.FullName -Raw | ConvertFrom-Json).id] = $true } catch { }
  }
  $stale = @()
  Get-ChildItem (Join-Path $AppDir 'public\app\plugins\datasource') -Directory -ErrorAction SilentlyContinue | ForEach-Object {
    $pj = Join-Path $_.FullName 'plugin.json'
    if (Test-Path $pj) {
      $why = $null; $id = $null
      try {
        $j = Get-Content $pj -Raw | ConvertFrom-Json
        $id = $j.id
        if ($id -and $bundled.ContainsKey($id)) { $why = 'the real one is in data\plugins-bundled' }
        elseif ($j.backend -and $j.executable) {
          $exe = Split-Path $j.executable -Leaf
          if (-not (Get-ChildItem $_.FullName -Recurse -Filter "$exe*.exe" -ErrorAction SilentlyContinue | Select-Object -First 1)) {
            $why = 'its program is missing: not part of this version'
          }
        }
      } catch { }
      if ($why) { $stale += [pscustomobject]@{ Id = $id; Folder = $_.Name; Path = $_.FullName; Why = $why } }
    }
  }
  return $stale
}

function Read-LogFrom([long]$Offset) {
  if (-not (Test-Path $GrafanaLog)) { return @() }
  $fs = [IO.File]::Open($GrafanaLog, 'Open', 'Read', 'ReadWrite')
  try {
    if ($Offset -gt $fs.Length) { $Offset = 0 }
    [void]$fs.Seek($Offset, 'Begin')
    return (New-Object IO.StreamReader($fs)).ReadToEnd() -split "`r?`n"
  } finally { $fs.Dispose() }
}
function Get-LogSize { if (Test-Path $GrafanaLog) { (Get-Item $GrafanaLog).Length } else { 0 } }

function Get-LastBootLines {
  if (-not (Test-Path $GrafanaLog)) { return @() }
  $lines = @(Read-LogFrom 0 | Select-Object -Last 20000)
  $s = @($lines | Select-String 'msg="Starting Grafana"' | Select-Object -Last 1)
  if ($s.Count -eq 0) { return $lines }
  return $lines[($s[0].LineNumber - 1)..($lines.Count - 1)]
}

# Error kinds (component | message | plugin) in a set of log lines. No data.
function Get-ErrorKinds([string[]]$Lines) {
  @($Lines | Where-Object { $_ -match 'level=error' } | ForEach-Object {
    '{0} | {1} | {2}' -f [regex]::Match($_, 'logger=(\S+)').Groups[1].Value,
      [regex]::Match($_, 'msg="([^"]*)"').Groups[1].Value,
      [regex]::Match($_, 'pluginId=(\S+)').Groups[1].Value
  })
}

function Get-InstalledVersion {
  $h = Get-Health
  if ($h -and $h.version) { return [version]($h.version -replace '[^\d\.].*$', '') }
  foreach ($exe in 'bin\grafana.exe', 'bin\grafana-server.exe') {
    $p = Join-Path $AppDir $exe
    if (Test-Path $p) {
      $r = Invoke-Exe $p @('-v')
      $m = [regex]::Match(($r.Out -join ' '), '(\d+\.\d+\.\d+)')
      if ($m.Success) { return [version]$m.Groups[1].Value }
    }
  }
  return $null
}

function Read-Password {
  if ($script:Ui) { return $script:Ui.Pw.Text }
  $sec = Read-Host 'PostgreSQL password (not shown)' -AsSecureString
  $ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($sec)
  try { return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr) }
  finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr) }
}

# =================================================================== detect

function Invoke-Detect {
  Title 'CHECK (nothing is changed)'
  $d = [ordered]@{}
  $d.Existing = Test-Path $GrafanaDb
  $d.Service  = [bool](Get-Svc)
  Enable-AnyCert
  $d.From = $null; if ($d.Existing) { $d.From = Get-InstalledVersion }
  $d.To = $null
  if ($script:SetupPath) {
    $m = [regex]::Match([IO.Path]::GetFileName($script:SetupPath), 'v?(\d+\.\d+\.\d+)')
    if ($m.Success) { $d.To = [version]$m.Groups[1].Value }
  }
  Log ("Install found: {0}   service: {1}   version now: {2}   version in setup: {3}" -f `
    $d.Existing, $d.Service, $(if ($d.From) { $d.From } else { '?' }), $(if ($d.To) { $d.To } else { '-' }))

  $script:Pg = Find-PgBin
  $d.PgVersion = $(if ($script:Pg) { $script:Pg.Version } else { $null })
  $d.Pg11 = Test-Path 'C:\Program Files\PostgreSQL\11\bin\psql.exe'
  Log ("PostgreSQL: {0}   (db-init.bat only works with PostgreSQL 11: {1})" -f $(if ($d.PgVersion) { $d.PgVersion } else { 'NOT FOUND' }), $d.Pg11)

  $d.DbOk = $false; $d.Fingerprint = @()
  if ($script:Pg) {
    $script:Pw = Read-Password
    $env:PGPASSWORD = $script:Pw
    try {
      [void](Invoke-Psql 'select 1')
      $d.DbOk = $true
      $d.Fingerprint = Get-PgFingerprint
      Log "Database '$DbName': connected, $($d.Fingerprint.Count) functions/views in public." 'Green'
    } catch { Log "Database '$DbName': cannot connect. Check the password." 'Red' }
  }

  $d.Plugins = @(); $d.IniGaps = @(); $d.Obsolete = @(); $d.Stale = @(); $d.ErrBefore = @()
  $d.Counts = Get-DbCounts
  if ($d.Existing) {
    $d.Plugins = @(Get-Plugins)
    foreach ($pl in $d.Plugins) {
      $tag = @(); if ($pl.Ours) { $tag += 'ours' }; if ($pl.Obsolete) { $tag += 'obsolete' }; if ($pl.Angular) { $tag += 'maybe Angular' }
      Log ("Plugin: {0}  {1} {2}  [{3}]" -f $pl.Id, $pl.Type, $pl.Version, ($tag -join ', '))
    }
    foreach ($pl in @($d.Plugins | Where-Object { $_.Obsolete })) {
      $used = $null
      if (Find-Sqlite) {
        $q = $(if ($pl.Type -eq 'app') { "select count(*) from plugin_setting where plugin_id = '$($pl.Id)' and enabled = 1;" }
               else { "select count(*) from data_source where type = '$($pl.Id)';" })
        try { $used = [int](Invoke-Sqlite $q | Select-Object -Last 1) } catch { }
      }
      $d.Obsolete += [pscustomobject]@{ Plugin = $pl; Used = $used }
      $how = $(if ($pl.Type -eq 'app') { 'enabled' } else { 'datasources using it' })
      Log ("Obsolete plugin {0} ({1} {2}): {3} = {4}" -f $pl.Id, $pl.Type, $pl.Version, $how, $(if ($null -ne $used) { $used } else { '?' }))
    }
    $d.Stale = @(Get-StaleCoreDatasources)
    if ($d.Stale.Count -gt 0) { Log "Old datasource copies in public (left by an older version): $($d.Stale.Count)" 'Yellow' }
    $d.ErrBefore = @(Get-ErrorKinds (Get-LastBootLines) | Sort-Object -Unique)
    Log "Error kinds in the log of the running version: $($d.ErrBefore.Count)"
    $d.IniGaps = @(Get-IniGaps (Get-Content $CustomIni))
    Log "custom.ini: $($d.IniGaps.Count) item(s) missing for this version."
    $c = $d.Counts
    if ($null -ne $c.OAuthUsers) {
      Log ("grafana.db: OAuth users {0}, without auth id {1}; legacy datasources {2}; datasources without db name {3}; old panel types {4}" -f `
        $c.OAuthUsers, $c.OAuthMissing, $c.LegacyDs, $c.DsNoDb, $c.OldPanels)
    } else { Log 'grafana.db: no sqlite3 yet; it is checked again after the setup.' 'Yellow' }
  }
  $d.FreeGb = [math]::Round((Get-PSDrive C).Free / 1GB, 1)
  Log "Free space on C: $($d.FreeGb) GB"
  return $d
}

# =================================================================== plan

function New-Plan($d) {
  $p = [ordered]@{ Scenario = $null; Stop = $null; Warn = $null; Steps = @() }
  function Add($on, $name, $why) { $p.Steps += [pscustomobject]@{ On = [bool]$on; Name = $name; Why = $why } }

  if (-not $d.Existing) { $p.Scenario = 'NEW' }
  elseif (-not $d.From) { $p.Stop = 'Cannot read the installed version (service down and exe gives no version).' }
  elseif (-not $script:SetupPath) { $p.Scenario = 'REPAIR' }
  elseif (-not $d.To) { $p.Stop = 'Cannot read the version from the setup file name.' }
  elseif ($d.From -gt $d.To) { $p.Stop = "Installed $($d.From) is newer than the setup $($d.To). No downgrade." }
  elseif ($d.From.Major -lt $d.To.Major) { $p.Scenario = 'MIGRATE' }
  elseif ($d.From -lt $d.To) { $p.Scenario = 'UPDATE' }
  else { $p.Scenario = 'REPAIR' }

  if ($p.Scenario -eq 'NEW' -and -not $script:SetupPath) { $p.Stop = 'No install here: choose the setup file.' }
  if (-not $d.PgVersion) { $p.Stop = 'PostgreSQL not found. Install PostgreSQL first (not with the setup check box: it installs version 11).' }
  elseif (-not $d.DbOk) { $p.Stop = "Cannot connect to database '$DbName'. Check the password." }
  if ($p.Stop) { return $p }
  if ($d.FreeGb -lt 5) { $p.Stop = 'Less than 5 GB free on C:.'; return $p }
  if ($script:SetupPath -match 'dashboard-upgrade') { $p.Stop = 'Use dashboard-setup-*.exe, not dashboard-upgrade-*.exe.'; return $p }

  $ex = $d.Existing
  $runSetup = ($p.Scenario -ne 'REPAIR')
  $c = $d.Counts
  $known = ($null -ne $c.OAuthUsers)
  $oldOurs = @($d.Plugins | Where-Object { $_.Ours }).Count
  $obsFree = @($d.Obsolete | Where-Object { $_.Used -eq 0 })
  $obsUsed = @($d.Obsolete | Where-Object { $_.Used -ne 0 })
  $staleN = @($d.Stale).Count
  $migrating = $ex -and $d.From -and $d.To -and $d.From.Major -lt $d.To.Major

  Add $ex 'Backup' 'whole install folder, service settings and database code (no rows)'
  Add ($runSetup -and $oldOurs -gt 0) 'Old mSupply plugins out' $(if ($runSetup) { "$oldOurs folder(s) of our plugins; the setup puts the new ones" } else { 'no setup in this run' })
  Add ($obsFree.Count -gt 0) 'Obsolete plugins out' $(if ($d.Obsolete.Count -eq 0) { 'none found' }
      elseif ($obsUsed.Count -gt 0) { 'kept, still in use: ' + (($obsUsed | ForEach-Object { $_.Plugin.Id }) -join ', ') }
      else { (($obsFree | ForEach-Object { $_.Plugin.Id }) -join ', ') + ': not in use' })
  Add ($runSetup -and $ex) 'Old Grafana files out' $(if ($runSetup) { 'public and plugins-bundled: the setup does not remove old files' } else { 'no setup in this run' })
  Add $runSetup 'Official setup' $(if ($runSetup) { "install $($d.To)" } else { 'same version: nothing to install' })
  Add ($runSetup -and $ex) 'Put back grafana.db and custom.ini' $(if ($runSetup) { 'the setup overwrites them with empty ones' } else { 'no setup in this run' })
  Add ($ex -and ($runSetup -or $d.IniGaps.Count -gt 0)) 'Add missing custom.ini keys' "$($d.IniGaps.Count) missing now"
  Add ($ex -and ($runSetup -or $staleN -gt 0)) 'Old datasource copies out' $(if ($runSetup) { 'checked after the setup' } else { "$staleN found" })
  Add $ex 'Missing provisioning folders' 'conf\provisioning\plugins and alerting; created empty if missing'
  Add ($migrating -and (-not $known -or $c.OldPanels -gt 0)) 'Old panel types -> new' $(if (-not $migrating) { 'only before the first start of a new version' } elseif ($known) { "$($c.OldPanels) dashboard(s)" } else { 'counted after the setup' })
  Add $migrating 'First start (database migration)' $(if ($migrating) { "grafana.db moves from $($d.From) to $($d.To)" } else { 'no new major version' })
  Add $ex 'Datasources and OAuth logins' 'grafanadb-update.bat runs only if the counts are not zero'
  Add $ex 'OAuth email lookup' 'only if users have no auth id (you decide), or to turn it off'
  Add $true 'Database code (db-init)' $(if ($ex) { 'only check that it did not change' }
      elseif ($d.Pg11) { 'the setup runs it (PostgreSQL 11 found)' }
      else { "the setup cannot run it; this tool runs db-init.sql with PostgreSQL $($d.PgVersion)" })
  Add $true 'Final start and checks' 'version, plugins loaded, new errors'

  $ang = @($d.Plugins | Where-Object { $_.Angular -and -not $_.Ours })
  if ($ang.Count -gt 0 -and $d.To -and $d.To.Major -ge 12) {
    $p.Warn = "These plugins look like Angular and will not load in $($d.To.Major): " + (($ang | ForEach-Object { $_.Id }) -join ', ')
  }
  return $p
}

function Show-Plan($p) {
  Title "PLAN   scenario: $($p.Scenario)"
  if ($script:Ui) {
    $u = $script:Ui
    $u.Scenario.Text = $(if ($p.Stop) { "Cannot go on: $($p.Stop)" } else { "Scenario: $($p.Scenario)" })
    $u.Scenario.ForeColor = $(if ($p.Stop) { [System.Drawing.Color]::Firebrick } else { [System.Drawing.Color]::Black })
    $u.Steps.Items.Clear()
    $script:StepItems = @{}; $script:StepState = @{}
  }
  if ($p.Stop) { Log "Cannot go on: $($p.Stop)" 'Red'; return }
  $i = 0
  foreach ($s in $p.Steps) {
    $i++
    $tag = $(if ($s.On) { 'DO' } else { 'SKIP' })
    Log ("{0,2}. {1,-4}  {2}  ({3})" -f $i, $tag, $s.Name, $s.Why) $(if ($s.On) { 'White' } else { 'DarkGray' })
    if ($script:Ui) {
      $it = New-Object System.Windows.Forms.ListViewItem("$i")
      [void]$it.SubItems.Add($s.Name)
      [void]$it.SubItems.Add($tag)
      [void]$it.SubItems.Add($s.Why)
      if (-not $s.On) { $it.ForeColor = [System.Drawing.Color]::Gray }
      [void]$script:Ui.Steps.Items.Add($it)
      $script:StepItems[$s.Name] = $it
    }
    $script:StepState[$s.Name] = $tag
  }
  if ($p.Warn) { Log $p.Warn 'Yellow' }
}

# =================================================================== run

function Invoke-Run($d, $p) {
  $ex = $d.Existing
  $script:Bk = Join-Path $BackupRoot (Get-Date -Format 'yyyyMMdd_HHmmss')
  New-Item -ItemType Directory -Path $script:Bk -Force | Out-Null
  $script:TmpDir = $script:Bk
  Start-LogFile (Join-Path $script:Bk 'run.log')
  Log "Scenario $($p.Scenario). Folder for backup and logs: $($script:Bk)"
  $fpBefore = @($d.Fingerprint)
  $fpBefore | Set-Content (Join-Path $script:Bk 'pg_fingerprint_before.txt') -Encoding UTF8

  if (Enter-Step $p 'Backup') {
    if (-not (Confirm-Step 'Stop the service and copy everything')) { Fail 'No backup, no changes. Stopped.' }
    Stop-Dashboard
    $svc = Get-ItemProperty -Path $ServiceReg -ErrorAction SilentlyContinue
    if ($svc) {
      [pscustomobject]@{ Application = $svc.Application; AppParameters = $svc.AppParameters; AppDirectory = $svc.AppDirectory } |
        ConvertTo-Json | Set-Content (Join-Path $script:Bk 'service.json') -Encoding UTF8
      Log "Service before: $($svc.Application) $($svc.AppParameters)"
    }
    Log 'Copying the install folder (some minutes)...'
    $r = Invoke-Exe 'robocopy.exe' @($AppDir, (Join-Path $script:Bk 'install'), '/E', '/R:1', '/W:1', '/NFL', '/NDL', '/NP')
    if ($r.Code -ge 8) { Fail "robocopy failed (code $($r.Code))." }
    foreach ($f in 'data\grafana.db', 'conf\custom.ini') {
      if ((Get-Md5 (Join-Path $AppDir $f)) -ne (Get-Md5 (Join-Path $script:Bk "install\$f"))) { Fail "Backup of $f is not equal to the original." }
    }
    $r = Invoke-Exe (Join-Path $script:Pg.Bin 'pg_dump.exe') @('-h', $DbHost, '-p', "$DbPort", '-U', $DbUser, '-w',
      '--schema-only', '-n', 'public', '-f', (Join-Path $script:Bk 'og_schema_before.sql'), $DbName)
    if ($r.Code -ne 0) { Fail ('pg_dump failed: ' + ($r.Out -join ' ')) }
    Log 'Backup done and checked (md5). Database code saved, no rows.' 'Green'
  }

  if (Enter-Step $p 'Old mSupply plugins out') {
    if (Confirm-Step 'Move the old folders of our plugins to the backup folder') {
      $dest = Join-Path $script:Bk 'plugins_old'
      New-Item -ItemType Directory -Path $dest -Force | Out-Null
      foreach ($pl in @($d.Plugins | Where-Object { $_.Ours })) {
        Move-Item $pl.Path (Join-Path $dest $pl.Folder)
        Log "Moved out: $($pl.Folder) ($($pl.Id))"
      }
    }
  }

  if (Enter-Step $p 'Obsolete plugins out') {
    if (Confirm-Step 'Move the obsolete plugin folders to the backup folder') {
      $dest = Join-Path $script:Bk 'plugins_obsolete'
      New-Item -ItemType Directory -Path $dest -Force | Out-Null
      foreach ($o in @($d.Obsolete | Where-Object { $_.Used -eq 0 })) {
        Move-Item $o.Plugin.Path (Join-Path $dest $o.Plugin.Folder)
        Log "Moved out: $($o.Plugin.Folder) ($($o.Plugin.Id))"
      }
    }
  }

  if (Enter-Step $p 'Old Grafana files out') {
    if (Confirm-Step 'Move public and data\plugins-bundled of the old version to the backup folder') {
      Stop-Dashboard
      $dest = Join-Path $script:Bk 'grafana_old'
      New-Item -ItemType Directory -Path $dest -Force | Out-Null
      foreach ($rel in 'public', 'data\plugins-bundled') {
        $src = Join-Path $AppDir $rel
        if (Test-Path $src) { Move-Item $src (Join-Path $dest ($rel -replace '\\', '_')); Log "Moved out: $rel" }
      }
    }
  }

  if (Enter-Step $p 'Official setup') {
    Log 'In the setup: give the PostgreSQL password, keep the other values.' 'Yellow'
    Log 'Do NOT tick "install PostgreSQL".' 'Yellow'
    if (-not (Confirm-Step 'Open the setup and wait until it is closed')) { Fail 'The next steps need the setup. Stopped.' }
    $pr = Start-Process -FilePath (Resolve-Path $script:SetupPath).Path -PassThru
    Log 'Setup is open. Waiting until it is closed...'
    while (-not $pr.HasExited) { Wait-Sec 1 }
    while (Get-Process -Name irsetup -ErrorAction SilentlyContinue) { Wait-Sec 2 }
    Log "Setup closed (exit code $($pr.ExitCode))."
    if (-not (Test-Path (Join-Path $AppDir 'bin\grafana.exe'))) { Fail 'bin\grafana.exe is missing: the setup did not finish.' }
    if (-not $d.Pg11 -and (Test-Path 'C:\Program Files\PostgreSQL\11\bin\psql.exe')) {
      Log 'PostgreSQL 11 was installed by the setup, so db-init ran. The database code check will show it.' 'Red'
    }
    if ($ex) { Wait-Sec 5; Stop-Dashboard }   # it started on an empty database

    # INSTALL-13.2.md troubleshooting: the service must run bin\grafana.exe server.
    # An old service can still point to bin\grafana-server.exe (removed in 13).
    $svc = Get-ItemProperty -Path $ServiceReg -ErrorAction SilentlyContinue
    if (-not $svc) { Fail "Service '$ServiceName' not found after the setup." }
    $wantExe = Join-Path $AppDir 'bin\grafana.exe'
    $svcOk = ("$($svc.Application)".TrimEnd('\') -eq $wantExe) -and ("$($svc.AppParameters)".Trim() -eq 'server') -and
      ("$($svc.AppDirectory)".TrimEnd('\') -eq $AppDir)
    if ($svcOk) { Log 'Service runs bin\grafana.exe server.' 'Green' }
    else {
      Log "Service runs: $($svc.Application) $($svc.AppParameters) (folder $($svc.AppDirectory))" 'Yellow'
      if (Confirm-Step 'Point the service to bin\grafana.exe server') {
        Stop-Dashboard
        Set-ItemProperty -Path $ServiceReg -Name Application   -Value $wantExe
        Set-ItemProperty -Path $ServiceReg -Name AppParameters -Value 'server'
        Set-ItemProperty -Path $ServiceReg -Name AppDirectory  -Value $AppDir
        Log 'Service now runs bin\grafana.exe server.' 'Green'
      }
    }
  }

  if (Enter-Step $p 'Put back grafana.db and custom.ini') {
    if (-not (Confirm-Step 'Copy the customer grafana.db and custom.ini back')) { Fail 'Without this the customer dashboards are lost. Stopped.' }
    Copy-Item $GrafanaDb (Join-Path $script:Bk 'grafana.db.from-setup') -Force
    Copy-Item $CustomIni (Join-Path $script:Bk 'custom.ini.from-setup') -Force
    foreach ($f in 'data\grafana.db', 'conf\custom.ini') {
      Copy-Item (Join-Path $script:Bk "install\$f") (Join-Path $AppDir $f) -Force
      if ((Get-Md5 (Join-Path $AppDir $f)) -ne (Get-Md5 (Join-Path $script:Bk "install\$f"))) { Fail "Copy of $f failed." }
    }
    Log 'Customer grafana.db and custom.ini are back (md5 checked).' 'Green'
  }

  if (Enter-Step $p 'Add missing custom.ini keys') {
    $ini = Get-Content $CustomIni
    $gaps = @(Get-IniGaps $ini)
    if ($gaps.Count -eq 0) { Log 'Nothing missing.' 'Green'; Set-StepStatus $script:CurStep 'no change' }
    else {
      $gaps | ForEach-Object { Log "  missing: $_" }
      if (Confirm-Step "Add $($gaps.Count) item(s); everything else in the file stays") {
        Stop-Dashboard
        Save-Ini (Repair-Ini $ini)
        Log 'custom.ini updated.' 'Green'
      }
    }
  }

  if (Enter-Step $p 'Old datasource copies out') {
    $stale = @(Get-StaleCoreDatasources)
    if ($stale.Count -eq 0) { Log 'None: public has only the datasources of this version.' 'Green'; Set-StepStatus $script:CurStep 'no change' }
    else {
      $stale | ForEach-Object { Log "  old copy: $($_.Folder) ($($_.Id)); $($_.Why)" }
      if (Confirm-Step "Move $($stale.Count) old copy(ies) to the backup folder") {
        Stop-Dashboard
        $dest = Join-Path $script:Bk 'public_datasource_old'
        New-Item -ItemType Directory -Path $dest -Force | Out-Null
        foreach ($s in $stale) { Move-Item $s.Path (Join-Path $dest $s.Folder) }
        Log "Moved $($stale.Count) folder(s)." 'Green'
      }
    }
  }

  if (Enter-Step $p 'Missing provisioning folders') {
    $missingDirs = @(@('plugins', 'alerting') | Where-Object { -not (Test-Path (Join-Path $ProvDir $_)) })
    if ($missingDirs.Count -eq 0) { Log 'Nothing missing.' 'Green'; Set-StepStatus $script:CurStep 'no change' }
    else {
      Log "Missing in conf\provisioning: $($missingDirs -join ', ') (Grafana logs an error at each start without them)"
      if (Confirm-Step 'Create them empty') {
        foreach ($m in $missingDirs) { New-Item -ItemType Directory -Path (Join-Path $ProvDir $m) -Force | Out-Null }
        Log 'Created.' 'Green'
      }
    }
  }

  if (Enter-Step $p 'Old panel types -> new') {
    Stop-Dashboard
    foreach ($oldType in $PanelTypeMap.Keys) {
      $newType = $PanelTypeMap[$oldType]
      $o = '"type":"' + $oldType + '"'; $n = '"type":"' + $newType + '"'
      $count = "select (select count(*) from dashboard where instr(data, '$o') > 0) + (select count(*) from library_element where instr(model, '$o') > 0);"
      $before = [int](Invoke-Sqlite $count | Select-Object -Last 1)
      Log "$oldType : $before dashboard(s)/library panel(s)"
      if ($before -gt 0 -and (Confirm-Step "Change $oldType to $newType in $before item(s)")) {
        Invoke-Sqlite @"
update dashboard set data = replace(data, '$o', '$n') where instr(data, '$o') > 0;
update library_element set model = replace(model, '$o', '$n') where instr(model, '$o') > 0;
"@ | Out-Null
        $after = [int](Invoke-Sqlite $count | Select-Object -Last 1)
        if ($after -ne 0) { Fail "$after item(s) still use $oldType." }
        Log "Done: $before changed, 0 left." 'Green'
      }
    }
  }

  if (Enter-Step $p 'First start (database migration)') {
    if (-not (Confirm-Step 'Start the service and wait for the migration')) { Fail 'The next steps need the migrated database. Stopped.' }
    Start-Dashboard
    $h = Wait-Health $MigrationTimeoutMin
    if ($d.To -and "$($h.version)" -notlike "$($d.To.Major).*") { Fail "Version is $($h.version), not $($d.To)." }
    Stop-Dashboard
  }

  $c = $null
  if (Enter-Step $p 'Datasources and OAuth logins') {
    Stop-Dashboard
    $c = Get-DbCounts
    if ($null -eq $c.OAuthUsers) { Fail 'Cannot read grafana.db counts.' }
    Log ("Now: legacy datasources {0}, without db name {1}, OAuth users without auth id {2} of {3}" -f $c.LegacyDs, $c.DsNoDb, $c.OAuthMissing, $c.OAuthUsers)
    if (($c.LegacyDs + $c.DsNoDb + $c.OAuthMissing) -eq 0) { Log 'Nothing to fix. grafanadb-update.bat not needed.' 'Green'; Set-StepStatus $script:CurStep 'no change' }
    else {
      if ($script:Pw -match '[&|<>^%" ]') {
        Fail 'The password has a character that breaks grafanadb-update.bat (& | < > ^ % " or space). Run it by hand (INSTALL-13.2.md step 6).'
      }
      if (Confirm-Step 'Run grafanadb-update.bat (it makes its own grafana.db backup too)') {
        $t0 = Get-Date
        $bat = Invoke-Exe 'cmd.exe' @('/c', ('grafanadb-update.bat {0} {1} {2} {3} {4} {5}' -f $script:Pw, $DbUser, $DbPort, $DbName, $DbHost, $script:Pg.Version)) $ProvDir
        $mlog = Get-ChildItem $ProvDir -Filter 'migration_*.log' | Where-Object { $_.LastWriteTime -ge $t0.AddSeconds(-5) } |
          Sort-Object LastWriteTime -Descending | Select-Object -First 1
        if ($mlog) { Copy-Item $mlog.FullName $script:Bk }
        $c = Get-DbCounts
        Log ("After (bat exit {0}): legacy datasources {1}, without db name {2}, OAuth users without auth id {3} of {4}" -f `
          $bat.Code, $c.LegacyDs, $c.DsNoDb, $c.OAuthMissing, $c.OAuthUsers)
        if ($c.LegacyDs -ne 0 -or $c.DsNoDb -ne 0) { Fail 'Datasources not fixed. Read the migration_*.log in the backup folder.' }
      }
    }
  }

  $lookup = 'off'
  if (Enter-Step $p 'OAuth email lookup') {
    if ($null -eq $c) { $c = Get-DbCounts }
    $isOn = ((Get-IniValue (Get-Content $CustomIni) 'auth' 'oauth_allow_insecure_email_lookup') -eq 'true')
    if ($c.OAuthMissing -gt 0) {
      Log "$($c.OAuthMissing) of $($c.OAuthUsers) OAuth users cannot log in yet." 'Yellow'
      Log 'With the lookup ON, they are linked by email at their first login (folders and permissions stay).'
      Log 'Turn it OFF later: run this tool again without a setup file (REPAIR) when all have logged in.'
      if ($isOn) { Log 'It is already ON.'; $lookup = 'on' }
      elseif (Confirm-Step 'Turn the OAuth email lookup ON') {
        Stop-Dashboard
        Save-Ini (Set-IniValue (Get-Content $CustomIni) 'auth' 'oauth_allow_insecure_email_lookup' 'true')
        $lookup = 'on'
        Log 'OAuth email lookup ON.' 'Yellow'
      }
    } elseif ($isOn) {
      Log 'All OAuth users have an auth id, but the email lookup is still ON.'
      if (Confirm-Step 'Turn the OAuth email lookup OFF') {
        Stop-Dashboard
        Save-Ini (Set-IniValue (Get-Content $CustomIni) 'auth' 'oauth_allow_insecure_email_lookup' 'false')
        Log 'OAuth email lookup OFF.' 'Green'
      } else { $lookup = 'on' }
    } else { Log 'All OAuth users have an auth id. Lookup stays OFF.' 'Green'; Set-StepStatus $script:CurStep 'no change' }
  }

  if (Enter-Step $p 'Database code (db-init)') {
    $fpAfter = @(Get-PgFingerprint)
    $fpAfter | Set-Content (Join-Path $script:Bk 'pg_fingerprint_after.txt') -Encoding UTF8
    if ($ex) {
      $diff = @(Compare-Object @($fpBefore) @($fpAfter))
      if ($diff.Count -gt 0) {
        $names = $diff | ForEach-Object { ($_.InputObject -split ':')[0..1] -join ':' } | Sort-Object -Unique
        Log "CHANGED: $($names -join ', ')" 'Red'
        Log 'The customer versions are in og_schema_before.sql. Put them back before using the dashboard.' 'Red'
        Set-StepStatus $script:CurStep 'failed'
      } else { Log 'No function, procedure or view changed.' 'Green'; Set-StepStatus $script:CurStep 'no change' }
    } elseif ($fpAfter.Count -gt $fpBefore.Count) {
      Log "db-init ran: $($fpAfter.Count - $fpBefore.Count) functions/views added." 'Green'
    } elseif (Confirm-Step "db-init did not run. Run db-init.sql with PostgreSQL $($script:Pg.Version)") {
      $r = Invoke-Exe (Join-Path $script:Pg.Bin 'psql.exe') @('-h', $DbHost, '-p', "$DbPort", '-U', $DbUser, '-d', $DbName, '-w', '-X', '-f', (Join-Path $ProvDir 'db-init.sql'))
      $r.Out | Set-Content (Join-Path $script:Bk 'db_init.log') -Encoding UTF8
      $errs = @($r.Out | Where-Object { $_ -match 'ERROR' }).Count
      Log "db-init.sql: psql exit $($r.Code), $errs ERROR line(s) (see db_init.log)." $(if ($errs) { 'Yellow' } else { 'Green' })
    }
  }

  $h = $null
  if (Enter-Step $p 'Final start and checks') {
    $offset = Get-LogSize
    Start-Dashboard
    $h = Wait-Health 10
    if ($d.To -and "$($h.version)" -ne "$($d.To)") { Log "Version is $($h.version), setup was $($d.To)." 'Yellow' }
    Log 'Reading the log of this start...'
    Wait-Sec 15
    $new = Read-LogFrom $offset
    foreach ($id in $UnsignedIds) {
      $ok = @($new | Where-Object { $_ -match 'Plugin registered' -and $_ -match [regex]::Escape($id) }).Count
      if ($ok -gt 0) { Log "Plugin loaded: $id" 'Green' } else { Log "Plugin NOT loaded: $id" 'Red'; Set-StepStatus $script:CurStep 'failed' }
    }
    $kinds = @(Get-ErrorKinds $new)
    $prev = @($d.ErrBefore)
    $known = @($kinds | Where-Object { $prev -contains $_ })
    $fresh = @($kinds | Where-Object { $prev -notcontains $_ })
    if ($known.Count -gt 0) {
      Log "Errors that the old version had too (not from this run): $($known.Count) line(s)" 'DarkGray'
      $known | Group-Object | ForEach-Object { Log ("    {0} x {1}" -f $_.Count, $_.Name) 'DarkGray' }
    }
    # INSTALL-13.2.md: addresses left as localhost are the usual reason logins go wrong.
    # Only the key names go to the log, never the addresses.
    $iniNow = Get-Content $CustomIni
    $local = @(@(@('server', 'domain'), @('server', 'root_url'), @('auth.generic_oauth', 'auth_url'), @('auth.generic_oauth', 'token_url'),
      @('auth.generic_oauth', 'api_url')) | Where-Object { "$(Get-IniValue $iniNow $_[0] $_[1])" -match 'localhost|127\.0\.0\.1' } |
      ForEach-Object { '[{0}] {1}' -f $_[0], $_[1] })
    if ($local.Count -gt 0) {
      Log "custom.ini still has localhost in: $($local -join ', '). Set the customer address there (INSTALL-13.2.md, new customer step 3)." 'Yellow'
    }
    if ($fresh.Count -eq 0) { Log 'New errors: none.' 'Green' }
    else {
      Log "New errors: $($fresh.Count) line(s). Check these:" 'Red'
      $fresh | Group-Object | ForEach-Object { Log ("    {0} x {1}" -f $_.Count, $_.Name) 'Red' }
      Set-StepStatus $script:CurStep 'failed'
    }
  }
  Close-Step

  Title 'DONE'
  Log ("Scenario: {0}. Version: {1}. OAuth email lookup: {2}." -f $p.Scenario, $(if ($h) { $h.version } else { '?' }), $lookup) 'Green'
  Log "Backup and logs: $($script:Bk)"
  Log 'Now test in the browser: login with a real mSupply user, a table (and its export), a region map, the world map.'
  if ($ex) { Log 'To go back: Rollback, and choose this backup folder.' }
}

# =================================================================== rollback

function Invoke-Rollback {
  $dir = $script:RollbackDir
  if (-not $dir -or -not (Test-Path (Join-Path $dir 'install'))) {
    Fail 'Choose a backup folder made by this tool (it has an "install" folder inside).'
  }
  $script:Bk = $dir
  Start-LogFile (Join-Path $dir 'rollback.log')
  Title 'ROLLBACK'
  Log "Everything in $AppDir goes back to the copy in $dir\install."
  if (-not (Confirm-Yes "Put back the install from $dir ? The dashboard is offline for some minutes.")) { Fail 'Stopped by user.' }
  Stop-Dashboard
  Log 'Copying the old install back...'
  $r = Invoke-Exe 'robocopy.exe' @((Join-Path $dir 'install'), $AppDir, '/MIR', '/R:1', '/W:1', '/NFL', '/NDL', '/NP')
  if ($r.Code -ge 8) { Fail "robocopy failed (code $($r.Code))." }
  $sj = Join-Path $dir 'service.json'
  if (Test-Path $sj) {
    $svc = Get-Content $sj -Raw | ConvertFrom-Json
    Set-ItemProperty -Path $ServiceReg -Name Application   -Value $svc.Application
    Set-ItemProperty -Path $ServiceReg -Name AppParameters -Value $svc.AppParameters
    Set-ItemProperty -Path $ServiceReg -Name AppDirectory  -Value $svc.AppDirectory
    Log "Service points again to: $($svc.Application) $($svc.AppParameters)"
  }
  Start-Dashboard
  Enable-AnyCert
  [void](Wait-Health 10)
  Log 'Rollback done. Database code in PostgreSQL is not changed by rollback; see og_schema_before.sql if needed.' 'Green'
}

# =================================================================== window

function Show-Gui {
  Add-Type -AssemblyName System.Windows.Forms
  Add-Type -AssemblyName System.Drawing
  [System.Windows.Forms.Application]::EnableVisualStyles()

  $f = New-Object System.Windows.Forms.Form
  $f.Text = $AppTitle
  $f.Size = New-Object System.Drawing.Size(920, 780)
  $f.MinimumSize = New-Object System.Drawing.Size(760, 560)
  $f.StartPosition = 'CenterScreen'
  $f.Font = New-Object System.Drawing.Font('Segoe UI', 9)
  $bold = New-Object System.Drawing.Font('Segoe UI', 10, [System.Drawing.FontStyle]::Bold)
  $TL = [System.Windows.Forms.AnchorStyles]'Top,Left'
  $TLR = [System.Windows.Forms.AnchorStyles]'Top,Left,Right'
  $TR = [System.Windows.Forms.AnchorStyles]'Top,Right'
  $ALL = [System.Windows.Forms.AnchorStyles]'Top,Bottom,Left,Right'
  $BL = [System.Windows.Forms.AnchorStyles]'Bottom,Left'
  $BR = [System.Windows.Forms.AnchorStyles]'Bottom,Right'
  $BLR = [System.Windows.Forms.AnchorStyles]'Bottom,Left,Right'

  function New-Ctl($type, $x, $y, $w, $h, $text, $anchor) {
    $c = New-Object "System.Windows.Forms.$type"
    $c.Location = New-Object System.Drawing.Point($x, $y)
    $c.Size = New-Object System.Drawing.Size($w, $h)
    if ($null -ne $text) { $c.Text = $text }
    if ($anchor) { $c.Anchor = $anchor }
    $f.Controls.Add($c)
    return $c
  }

  [void](New-Ctl Label 12 16 200 20 'Setup file (empty = repair only):' $TL)
  $txtSetup = New-Ctl TextBox 215 13 570 23 '' $TLR
  $btnBrowse = New-Ctl Button 795 12 95 25 'Browse...' $TR
  [void](New-Ctl Label 12 49 200 20 'PostgreSQL password:' $TL)
  $txtPw = New-Ctl TextBox 215 46 200 23 '' $TL
  $txtPw.UseSystemPasswordChar = $true
  $btnCheck = New-Ctl Button 425 45 130 25 'Check and plan' $TL
  $lblScenario = New-Ctl Label 12 82 880 22 'Choose the setup file, give the password, then click "Check and plan". Nothing changes until you click Start.' $TLR
  $lblScenario.Font = $bold

  $lv = New-Ctl ListView 12 108 878 320 $null $TLR
  $lv.View = 'Details'; $lv.FullRowSelect = $true; $lv.HeaderStyle = 'Nonclickable'; $lv.MultiSelect = $false
  [void]$lv.Columns.Add('#', 34)
  [void]$lv.Columns.Add('Step', 250)
  [void]$lv.Columns.Add('Status', 80)
  [void]$lv.Columns.Add('Why', 490)

  $rt = New-Ctl RichTextBox 12 436 878 240 $null $ALL
  $rt.ReadOnly = $true; $rt.BackColor = [System.Drawing.Color]::White
  $rt.Font = New-Object System.Drawing.Font('Consolas', 9)
  $rt.WordWrap = $false

  $lblNext = New-Ctl Label 12 684 878 20 '' $BLR
  $lblNext.Font = $bold; $lblNext.ForeColor = [System.Drawing.Color]::SteelBlue
  $btnStart = New-Ctl Button 12 708 100 28 'Start' $BL
  $btnRun = New-Ctl Button 120 708 100 28 'Run step' $BL
  $btnSkip = New-Ctl Button 228 708 100 28 'Skip step' $BL
  $btnStop = New-Ctl Button 336 708 100 28 'Stop' $BL
  $btnRollback = New-Ctl Button 542 708 110 28 'Rollback...' $BR
  $btnFolder = New-Ctl Button 660 708 132 28 'Open backup folder' $BR
  $btnClose = New-Ctl Button 800 708 90 28 'Close' $BR
  $btnStart.Enabled = $false; $btnRun.Enabled = $false; $btnSkip.Enabled = $false; $btnStop.Enabled = $false

  $script:Ui = @{ Form = $f; Log = $rt; Steps = $lv; Scenario = $lblScenario; Next = $lblNext; Pw = $txtPw; Run = $btnRun; Skip = $btnSkip }
  $script:Busy = $false
  $script:Finished = $false

  $found = Get-ChildItem $BaseDir -Filter 'dashboard-setup-*.exe' -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 1
  if ($found) { $txtSetup.Text = $found.FullName }

  $setIdle = {
    param([bool]$idle)
    $txtSetup.Enabled = $idle; $btnBrowse.Enabled = $idle; $txtPw.Enabled = $idle; $btnCheck.Enabled = $idle
    $btnRollback.Enabled = $idle; $btnClose.Enabled = $idle; $btnStop.Enabled = -not $idle
    $script:Busy = -not $idle
  }

  $btnBrowse.Add_Click({
    $dlg = New-Object System.Windows.Forms.OpenFileDialog
    $dlg.Filter = 'Dashboard setup (dashboard-setup-*.exe)|dashboard-setup-*.exe|All programs (*.exe)|*.exe'
    $dlg.InitialDirectory = $BaseDir
    if ($dlg.ShowDialog($f) -eq 'OK') { $txtSetup.Text = $dlg.FileName }
  })

  $btnCheck.Add_Click({
    if (-not $txtPw.Text) { [void][System.Windows.Forms.MessageBox]::Show($f, 'Give the PostgreSQL password.', $AppTitle); return }
    $script:SetupPath = $(if ($txtSetup.Text.Trim()) { $txtSetup.Text.Trim() } else { $null })
    if ($script:SetupPath -and -not (Test-Path $script:SetupPath)) {
      [void][System.Windows.Forms.MessageBox]::Show($f, 'The setup file does not exist.', $AppTitle); return
    }
    & $setIdle $false
    $btnStart.Enabled = $false; $btnStop.Enabled = $false
    $rt.Clear(); $script:Early.Clear(); $script:LogFile = $null; $script:StopAsked = $false
    try {
      $script:D = Invoke-Detect
      $script:P = New-Plan $script:D
      Show-Plan $script:P
      $btnStart.Enabled = (-not $script:P.Stop)
      if (-not $script:P.Stop) { $lblNext.Text = 'Read the plan. Click Start to begin; each step waits for "Run step".' }
    } catch {
      Log "ERROR: $($_.Exception.Message)" 'Red'
    } finally { & $setIdle $true }
  })

  $btnStart.Add_Click({
    $q = "Scenario $($script:P.Scenario). Start now?"
    if ($script:D.Existing) { $q += "`r`nThe dashboard will be offline until the end." }
    if (-not (Confirm-Yes $q)) { return }
    $btnStart.Enabled = $false
    & $setIdle $false
    $script:StopAsked = $false
    $script:Finished = $false
    try {
      $null = Invoke-Run $script:D $script:P
      [void][System.Windows.Forms.MessageBox]::Show($f, "Done.`r`nNow test in the browser.`r`nLog: $($script:Bk)\run.log", $AppTitle, 'OK', 'Information')
      $script:Finished = $true
    } catch {
      Set-StepStatus $script:CurStep 'failed'
      Log "ERROR: $($_.Exception.Message)" 'Red'
      $msg = "Stopped: $($_.Exception.Message)"
      if ($script:Bk -and (Test-Path (Join-Path $script:Bk 'install'))) {
        $msg += "`r`n`r`nThe backup is in $($script:Bk).`r`nTo go back: Rollback..., then choose that folder."
        Log "Backup is in $($script:Bk). To go back: Rollback... and choose that folder." 'Yellow'
      }
      [void][System.Windows.Forms.MessageBox]::Show($f, $msg, $AppTitle, 'OK', 'Error')
    } finally {
      $script:CurStep = $null
      $lblNext.Text = $(if ($script:Finished) { 'Finished. Test in the browser, then click Close.' } else { '' })
      $btnRun.Enabled = $false; $btnSkip.Enabled = $false
      & $setIdle $true
    }
  })

  $btnRun.Add_Click({ $script:Choice = 'R' })
  $btnSkip.Add_Click({ $script:Choice = 'S' })
  $btnStop.Add_Click({
    if (Confirm-Yes 'Stop after the current action? The backup stays and you can use Rollback.') {
      $script:Choice = 'Q'; $script:StopAsked = $true
    }
  })

  $btnRollback.Add_Click({
    $dlg = New-Object System.Windows.Forms.FolderBrowserDialog
    $dlg.Description = 'Choose the backup folder (it has an "install" folder inside)'
    if (Test-Path $BackupRoot) { $dlg.SelectedPath = $BackupRoot }
    if ($dlg.ShowDialog($f) -ne 'OK') { return }
    $script:RollbackDir = $dlg.SelectedPath
    if (-not $script:Pw) { $script:Pw = $txtPw.Text }
    & $setIdle $false
    $btnStart.Enabled = $false
    $rt.Clear(); $script:Early.Clear(); $script:LogFile = $null; $script:StopAsked = $false
    try {
      Invoke-Rollback
      [void][System.Windows.Forms.MessageBox]::Show($f, 'Rollback done.', $AppTitle, 'OK', 'Information')
    } catch {
      Log "ERROR: $($_.Exception.Message)" 'Red'
      [void][System.Windows.Forms.MessageBox]::Show($f, "Rollback stopped: $($_.Exception.Message)", $AppTitle, 'OK', 'Error')
    } finally { & $setIdle $true }
  })

  $btnClose.Add_Click({ $f.Close() })

  $btnFolder.Add_Click({
    $target = $(if ($script:Bk -and (Test-Path $script:Bk)) { $script:Bk } elseif (Test-Path $BackupRoot) { $BackupRoot } else { $null })
    if ($target) { Start-Process explorer.exe $target }
  })

  $f.Add_FormClosing({
    param($s, $e)
    if ($script:Busy) {
      if (Confirm-Yes 'A step is running. Stop and close?') { $script:Choice = 'Q'; $script:StopAsked = $true }
      else { $e.Cancel = $true }
    }
  })

  [void]$f.ShowDialog()
  $f.Dispose()
}

# =================================================================== main

function Test-Admin {
  $pr = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
  return $pr.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

$useGui = -not ($Console -or $PlanOnly -or $Rollback)
try {
  if ($useGui) {
    if (-not (Test-Admin)) {
      Add-Type -AssemblyName System.Windows.Forms
      [void][System.Windows.Forms.MessageBox]::Show('Run this as Administrator.', $AppTitle, 'OK', 'Error')
      exit 1
    }
    Show-Gui
    exit 0
  }

  if (-not (Test-Admin)) { throw 'Run PowerShell as Administrator.' }
  if ($script:SetupPath -and -not (Test-Path $script:SetupPath)) { throw "Setup file not found: $($script:SetupPath)" }
  if ($Rollback) { Invoke-Rollback; exit 0 }

  $d = Invoke-Detect
  $p = New-Plan $d
  Show-Plan $p
  if ($p.Stop) { exit 1 }
  if ($PlanOnly) { Log ''; Log 'Plan only: nothing was changed.' 'Green'; exit 0 }
  if (-not (Confirm-Yes "Scenario $($p.Scenario). Start now?")) { throw 'Stopped by user.' }
  Invoke-Run $d $p
} catch {
  if ($script:Ui) { throw }
  Write-Host ''
  Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
  if ($script:Bk -and (Test-Path (Join-Path $script:Bk 'install'))) {
    Write-Host "Backup is in $($script:Bk). To go back: dashboard-install-assistant.ps1 -Console -Rollback -BackupDir `"$($script:Bk)`"" -ForegroundColor Yellow
  }
  exit 1
} finally {
  Remove-Item Env:PGPASSWORD -ErrorAction SilentlyContinue
}

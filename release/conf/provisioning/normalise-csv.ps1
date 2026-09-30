<#
.SYNOPSIS
    Normalise the line endings of a CSV so psql's \copy can read it.

.DESCRIPTION
    grafanadb-update.bat hands users.csv from sqlite3 to psql. sqlite3 on
    Windows already terminates lines with CRLF, and cmd's ">" redirection
    converts the LF to CRLF again, producing CR CR LF. psql's \copy reads the
    extra CR as an empty line and fails with:

        ERROR: missing data for column "name"
        CONTEXT: COPY temp_grafana_users, line 2: ""

    Rather than depend on any particular sqlite3 version or shell keeping the
    line endings clean, collapse any run of CRs before a LF to a single CRLF
    and drop a trailing blank line. Written as a file (not inline in the .bat)
    because escaping backticks and quotes through cmd is error prone.

    The file is rewritten as UTF-8 without a BOM: \copy treats a BOM as data
    and would fail on the first column.
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string] $Path
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path -LiteralPath $Path)) {
    Write-Error "CSV not found: $Path"
    exit 1
}

$text = [IO.File]::ReadAllText($Path)

# Strip a UTF-8 BOM if one is present.
if ($text.Length -gt 0 -and $text[0] -eq [char]0xFEFF) {
    $text = $text.Substring(1)
}

# CR CR LF (or any longer run of CRs) -> CRLF; bare LF -> CRLF.
$text = [regex]::Replace($text, "`r+`n", "`r`n")
$text = [regex]::Replace($text, "(?<!`r)`n", "`r`n")

# Exactly one trailing newline, so \copy sees no empty final row.
$text = $text.TrimEnd("`r", "`n") + "`r`n"

[IO.File]::WriteAllText($Path, $text, (New-Object Text.UTF8Encoding $false))

$lines = ([regex]::Matches($text, "`r`n")).Count
Write-Host "normalised $Path ($lines lines including header)"

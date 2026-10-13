#!/usr/bin/env python3
"""Import dashboard JSON files into Grafana, pointing broken PostgreSQL references at the
installed data source.

Client dashboards reference the data source in several ways. Grafana 13 resolves some of them
and fails on others:
  - null / missing           -> default data source, works
  - {"uid": X} with X present -> works
  - {"uid": X} with X absent  -> "Datasource X was not found" (no fallback without a name)
  - "${DS_POSTGRESQL...}"     -> placeholder from an exported file, only resolved by the UI import

This script rewrites only the last two cases, and only for PostgreSQL references, to the target
data source. Everything else is left as it is. A per-file report lists every change.

Usage, from the install folder (imports every .json in ./import):
  docker compose exec dashboard msupply import-dashboards --folder-uid <uid> [--folder-title <title>] \
      [--overwrite] [--dry-run] [--target-name PostgreSQL]
Admin credentials come from GF_SECURITY_ADMIN_USER / GF_SECURITY_ADMIN_PASSWORD in the
environment or in ./.env.
"""
import argparse
import base64
import copy
import json
import os
import sys
import urllib.error
import urllib.request

POSTGRES_TYPES = {"postgres", "grafana-postgresql-datasource"}


def load_env(path=".env"):
    env = dict(os.environ)
    if os.path.exists(path):
        for line in open(path):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, value = line.split("=", 1)
                env.setdefault(key, value)
    return env


class Grafana:
    def __init__(self, url, user, password):
        self.url = url.rstrip("/")
        self.auth = "Basic " + base64.b64encode(f"{user}:{password}".encode()).decode()

    def call(self, method, path, body=None):
        data = json.dumps(body).encode() if body is not None else None
        req = urllib.request.Request(self.url + path, data=data, method=method,
                                     headers={"Authorization": self.auth,
                                              "Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req) as resp:
                return resp.status, json.load(resp)
        except urllib.error.HTTPError as err:
            try:
                return err.code, json.load(err)
            except Exception:
                return err.code, {}


def normalize(dashboard, existing_uids, existing_names, target):
    """Return (new_dashboard, changes). Only broken PostgreSQL references are rewritten."""
    dash = copy.deepcopy(dashboard)
    changes = []
    target_ref = {"type": target["type"], "uid": target["uid"]}

    def fix(obj, where):
        ref = obj.get("datasource")
        if ref is None:
            return
        if isinstance(ref, str):
            if ref.startswith("${") and ref.endswith("}"):
                obj["datasource"] = dict(target_ref)
                changes.append({"where": where, "from": ref, "to": target_ref})
            # A plain name ("PostgreSQL") is left alone: it is resolved by name.
            return
        if not isinstance(ref, dict):
            return
        ref_type, ref_uid = ref.get("type"), ref.get("uid")
        if ref_uid is None:
            return
        is_placeholder = isinstance(ref_uid, str) and ref_uid.startswith("${")
        if ref_type in POSTGRES_TYPES and (is_placeholder or ref_uid not in existing_uids):
            if not is_placeholder and ref.get("name") in existing_names:
                return  # Grafana falls back to the name when the uid is unknown.
            obj["datasource"] = dict(target_ref)
            changes.append({"where": where, "from": ref, "to": target_ref})

    def walk(panels, path):
        for i, panel in enumerate(panels or []):
            label = f"{path}[{i}] {panel.get('title') or panel.get('type')}"
            fix(panel, label)
            for j, target_q in enumerate(panel.get("targets") or []):
                if isinstance(target_q, dict):
                    fix(target_q, f"{label} > target {target_q.get('refId', j)}")
            walk(panel.get("panels"), label + " >")

    walk(dash.get("panels"), "panel")
    for var in (dash.get("templating") or {}).get("list", []):
        fix(var, f"variable {var.get('name')}")
    for ann in (dash.get("annotations") or {}).get("list", []):
        fix(ann, f"annotation {ann.get('name')}")
    return dash, changes


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("files", nargs="+")
    parser.add_argument("--url", default="http://localhost:3000")
    parser.add_argument("--folder-uid", required=True)
    parser.add_argument("--folder-title")
    parser.add_argument("--target-name", default="PostgreSQL")
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--dry-run", action="store_true", help="report only, import nothing")
    parser.add_argument("--report", default="import-report.json")
    args = parser.parse_args()

    env = load_env()
    grafana = Grafana(args.url, env.get("GF_SECURITY_ADMIN_USER", "admin"), env["GF_SECURITY_ADMIN_PASSWORD"])

    status, datasources = grafana.call("GET", "/api/datasources")
    if status != 200:
        sys.exit(f"cannot list data sources: HTTP {status}")
    existing_uids = {ds["uid"] for ds in datasources}
    existing_names = {ds["name"] for ds in datasources}
    target = next((ds for ds in datasources if ds["name"] == args.target_name), None)
    if target is None:
        sys.exit(f"target data source '{args.target_name}' not found")

    if args.folder_title and not args.dry_run:
        grafana.call("POST", "/api/folders", {"uid": args.folder_uid, "title": args.folder_title})

    report = []
    for path in args.files:
        raw = json.load(open(path, encoding="utf-8"))
        dashboard = raw.get("dashboard", raw)
        new_dash, changes = normalize(dashboard, existing_uids, existing_names, target)
        new_dash["id"] = None
        entry = {"file": os.path.basename(path), "uid": new_dash.get("uid"),
                 "title": new_dash.get("title"), "changes": changes}
        if not args.dry_run:
            status, resp = grafana.call("POST", "/api/dashboards/db", {
                "dashboard": new_dash, "folderUid": args.folder_uid,
                "overwrite": args.overwrite, "message": "import with data source normalization"})
            entry["import_status"] = status
            entry["import_result"] = resp.get("status") or resp.get("message")
        report.append(entry)
        print(f"{entry['file'][:40]:40} changes={len(changes):3} import={entry.get('import_status', 'dry-run')}")

    json.dump(report, open(args.report, "w"), indent=2, ensure_ascii=False)
    print(f"report: {args.report}")


if __name__ == "__main__":
    main()

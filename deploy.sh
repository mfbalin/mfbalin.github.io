#!/usr/bin/env bash
# Deploy: commit and push. GitHub Pages serves the repo root on main.

set -euo pipefail

cd "$(dirname "$0")"

git add -A
git commit -m "Deploy site"
git push

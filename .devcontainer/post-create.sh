#!/usr/bin/env bash

set -euo pipefail

cd /workspaces/Portfolio/MyPortfolio
npm ci

mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/config

if ! grep -q '^Host github.com$' ~/.ssh/config; then
  cat >> ~/.ssh/config <<'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/ghkey_work
  IdentitiesOnly yes
EOF
fi

chmod 600 ~/.ssh/config

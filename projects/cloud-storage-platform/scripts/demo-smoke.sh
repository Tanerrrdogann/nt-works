#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:4101/api/v1}"
USERNAME="${DEMO_USERNAME:-demo.user}"
PASSWORD="${DEMO_PASSWORD:-Demo12345!}"

printf '[smoke] Logging in as %s\n' "$USERNAME"
curl -fsS -X POST "$BASE_URL/auth/login" \
  -H 'Content-Type: application/json' \
  -d "{\"usernameOrEmail\":\"$USERNAME\",\"password\":\"$PASSWORD\"}"

cat <<MSG

[smoke] Demo login request was sent.

Login payload for manual test:
{
  "usernameOrEmail": "$USERNAME",
  "password": "$PASSWORD"
}

Frontend: http://localhost:4101
Gateway through frontend proxy: $BASE_URL
MSG

#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STATIC_ROOT="$ROOT_DIR/deploy/static-demos"

DEMOS=(
  "kurumsal-web-sitesi:projects/kurumsal-web-sitesi"
  "landing-page:projects/landing-page"
  "randevu-rezervasyon-sistemi:projects/randevu-rezervasyon-sistemi"
  "whatsapp-siparis-katalog:projects/whatsapp-siparis-katalog"
  "admin-panelli-isletme-sistemi:projects/admin-panelli-isletme-sistemi"
)

rm -rf "$STATIC_ROOT"
mkdir -p "$STATIC_ROOT"

for entry in "${DEMOS[@]}"; do
  slug="${entry%%:*}"
  project="${entry#*:}"
  project_dir="$ROOT_DIR/$project"

  echo "==> Building static demo: $slug"
  (cd "$project_dir" && NTWORKS_STATIC_EXPORT=1 npm run build)

  if [ ! -d "$project_dir/out" ]; then
    echo "Static export output not found for $slug: $project_dir/out" >&2
    exit 1
  fi

  mkdir -p "$STATIC_ROOT/$slug"

  if [ -d "$project_dir/out/$slug" ]; then
    cp -a "$project_dir/out/$slug/." "$STATIC_ROOT/$slug/"
  else
    cp -a "$project_dir/out/." "$STATIC_ROOT/$slug/"
  fi

  rm -rf "$project_dir/out" "$project_dir/.next"
done

echo "==> Static demo assets are ready in $STATIC_ROOT"

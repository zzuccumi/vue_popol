#!/usr/bin/env sh

set -e

npm run build

cd docs

git init
git add -A
git commit -m 'New Deployment'
git push -f 'https://github.com/zzuccumi/vue_popol.git master:gh-pages'
cd -
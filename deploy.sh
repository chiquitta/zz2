#!/usr/bin/env sh
set -e

npm run build

cd dist
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/chiquitta/zz2.git master:gh-pages

cd -
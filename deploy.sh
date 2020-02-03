# deploy.sh
#!/usr/bin/env sh

#錯誤停止
set -e

npm run build

cd dist
git init
git add -A
git commit -m 'deploy'

# 提交到 gh-pages 分支
git push -f git@github.com:chiquitta/zz2.git master:gh-pages

cd -
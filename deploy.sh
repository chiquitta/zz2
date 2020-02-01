# deploy.sh
set -e
# 打包
npm run build
# 目標
cd dist
# 提交
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/chiquitta/zz2.git master:gh-pages

cd -
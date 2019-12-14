yarn build &&
git checkout gh-pages &&
rm -rf src *.json *.js *.css *.html *.png *.jpg *.gif *.jpeg *.lock *.sh &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit . -m "update" &&
git push &&
git checkout -
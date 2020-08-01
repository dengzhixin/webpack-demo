yarn build &&
git checkout gh_pages &&
rm -rf *.html *.js *.json *.css *.png &&
mv dist/* ./ &&
rm -rg dist ;
git add . &&
git commit -m 'autoDeploy' &&
git push  &&
git checkout -


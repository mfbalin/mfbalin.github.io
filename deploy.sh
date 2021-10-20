rm -rf docs

npm run build;

mv build docs;

git add docs;

git commit -m "Update";

git push;
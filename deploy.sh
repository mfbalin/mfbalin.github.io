rm -rf css images js static;

npm run build;

mv ./build/* ./;

git add .;

git commit -m "Update";

git push;
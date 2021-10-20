rm -rf docs

npm run build

mv build docs

echo "mfbal.in" > docs/CNAME

git add docs public src

git commit -m "Update"

git push
#!/usr/bin/env bash

npx json -I -f package.json -e "this.homepage=this.page"

yarn build

# sed -i '' -e 's/fetch("\//fetch("\/retry-app\//g' build/static/js/*.js

sed -i '.original' -e 's/\/mockServiceWorker.js/\/retry-app\/mockServiceWorker.js/g' build/static/js/*.js

npx json -I -f package.json -e "this.homepage=\"\""

echo Fixed
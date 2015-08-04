#!/usr/bin/env bash

trap "pm2 delete all > /dev/null 2>&1" EXIT

rm -rf build

pm2 delete all > /dev/null 2>&1

pm2 start dev-server.js -n dev -f
pm2 start server/index.js -n app -f

echo 'Press [CMD+C] to stop servers...'

./node_modules/webpack/bin/webpack.js --watch --config webpack.server.js

#!/usr/bin/env bash

rm -rf build

pm2 delete all > /dev/null 2>&1

pm2 start dev-server.js
pm2 start server

trap "pm2 delete all > /dev/null 2>&1" 2

./node_modules/webpack/bin/webpack.js --watch --config webpack.server.js

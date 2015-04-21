#!/usr/bin/env bash

rm -rf build
rm -f server/render-generated.js

pm2 delete all > /dev/null 2>&1

pm2 start dev-server.js
pm2 start server

webpack --watch --config webpack.server.js

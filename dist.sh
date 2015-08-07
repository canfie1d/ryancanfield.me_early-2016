#!/usr/bin/env bash

if [[ $# -eq 0 ]] ; then
    echo 'Missing APP_ENV parameter'
    exit 0
fi

rm -rf ./build
rm -rf ./dist
mkdir dist
NODE_ENV=$1 APP_ENV=$1 ./node_modules/webpack/bin/webpack.js -p

zip -r dist/build-frontend-$1 build

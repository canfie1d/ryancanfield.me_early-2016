#!/usr/bin/env bash

if [[ $# -eq 0 ]] ; then
    echo 'Missing APP_ENV parameter'
    exit 0
fi

rm -rf ./build
rm -rf ./dist
mkdir dist
NODE_ENV=$1 APP_ENV=$1 ./node_modules/webpack/bin/webpack.js -p
NODE_ENV=$1 APP_ENV=$1 ./node_modules/webpack/bin/webpack.js -p --config webpack.server.js
zip -r dist/build-frontend-$1 application build node_modules server -x \
    "node_modules/6to5-core/*" \
    "node_modules/6to5-loader/*" \
    "node_modules/autoprefixer-core/*" \
    "node_modules/autoprefixer-loader/*" \
    "node_modules/babel/*" \
    "node_modules/babel-loader/*" \
    "node_modules/chai/*" \
    "node_modules/css-loader/*" \
    "node_modules/extract-text-webpack-plugin/*" \
    "node_modules/file-loader/*" \
    "node_modules/html-webpack-plugin/*" \
    "node_modules/image-webpack-loader/*" \
    "node_modules/jshint-loader/*" \
    "node_modules/json-loader/*" \
    "node_modules/jsx-loader/*" \
    "node_modules/jsxhint-loader/*" \
    "node_modules/karma-chrome-launcher/*" \
    "node_modules/karma-firefox-launcher/*" \
    "node_modules/karma-junit-reporter/*" \
    "node_modules/karma-mocha/*" \
    "node_modules/karma-phantomjs-launcher/*" \
    "node_modules/karma-sinon-chai/*" \
    "node_modules/karma-sourcemap-loader/*" \
    "node_modules/karma-webpack/*" \
    "node_modules/karma/*" \
    "node_modules/mocha/*" \
    "node_modules/node-sass/*" \
    "node_modules/null-loader/*" \
    "node_modules/phantomjs/*" \
    "node_modules/postcss-loader/*" \
    "node_modules/raw-loader/*" \
    "node_modules/react-hot-loader/*" \
    "node_modules/react-tools/*" \
    "node_modules/sass-loader/*" \
    "node_modules/sinon-chai/*" \
    "node_modules/sinon/*" \
    "node_modules/style-loader/*" \
    "node_modules/url-loader/*" \
    "node_modules/webpack-dev-server/*" \
    "node_modules/webpack-error-notification/*" \
    "node_modules/webpack/*"

/* eslint-disable */
var __HOSTNAME__ = process.env.HOST ? process.env.HOST : 'localhost';

var autoprefixer      = require('autoprefixer');
var webpack           = require('webpack');
var WebpackError      = require('webpack-error-notification');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var environment = (process.env.APP_ENV || 'development');
var npmPath     = path.resolve(__dirname, 'node_modules');
var config      = {
  devtools : [],
  entry    : environment !== 'production'
    ? ['./application/bootstrap.js', 'webpack-hot-middleware/client?path=/__webpack_hmr?http://' + __HOSTNAME__ + ':9000']
    : ['./application/bootstrap.js'],
    media : ['./application/media.js'],
  plugins  : [
    new webpack.DefinePlugin({
      __BACKEND__     : process.env.BACKEND ? '\'' + process.env.BACKEND + '\'' : undefined,
      __ENVIRONMENT__ : '\'' + environment + '\'',
      __HOSTNAME__    : '\'' + __HOSTNAME__ + '\'',
      "process.env"   : {
        NODE_ENV : '\'' + environment + '\''
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({template : './application/index.html'})
  ],
  sassOptions  : (
    '?outputStyle=' + (environment === 'production' ? 'compressed' : 'nested') +
    '&includePaths[]=' + npmPath
  )
};

if (environment !== 'production') {
  config.devtools = 'eval-source-map';
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );

  if (process.platform !== 'win32') {
    config.plugins.push(new WebpackError(process.platform));
  }
}

module.exports = {
  name   : 'app bundle',
  entry  : config.entry,
  output : {
    filename   : 'app.js',
    path       : path.resolve(__dirname, 'build'),
    publicPath : '/'
  },
  module: {
    preLoaders : [
      {
        test    : /\.jsx?$/,
        loader  : 'eslint-loader',
        exclude : npmPath
      }
    ],
    loaders : [
      {
        test   : /\.(eot|ico|ttf|woff|woff2|gif|jpe?g|png|svg|mp3)$/,
        loader : 'file-loader',
        exclude : npmPath
      },
      {
        test    : /\.jsx?$/,
        loaders : ['babel'],
        exclude : npmPath
      },
      {
        test   : /\.json$/,
        loader : 'json-loader',
        exclude : npmPath
      },
      {
        test   : /\.scss$/,
        loader : 'style!css!postcss!sass' + config.sassOptions
      }
    ]
  },
  plugins : config.plugins,
  postcss : function() {
    return [autoprefixer];
  },
  resolve : {
    extensions : ['', '.css', '.js', '.json', '.jsx', '.scss', '.webpack.js', '.web.js']
  },
  devtool : config.devtools
};
/* eslint-enable */

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
    ? ['./shared/bootstrap.js', 'webpack-hot-middleware/client?path=/__webpack_hmr?http://' + __HOSTNAME__ + ':9000']
    : ['./shared/bootstrap.js'],
  media : ['./shared/media.js'],
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
    new HtmlWebpackPlugin({template : './shared/index.html', inject: false})
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

module.exports = [
  {
    name   : 'app bundle',
    entry  : config.entry,
    output : {
      filename   : 'app.js',
      path       : path.resolve(__dirname, 'build'),
      publicPath : '/'
    },
    module: {
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
      extensions : ['', '.css', '.js', '.json', '.jsx', '.scss', '.webpack.js', '.web.js'],
      alias: {
        "react": "preact-compat",
        "react-dom": "preact-compat",
        'react-addons-css-transition-group': 'rc-css-transition-group'
      }
    },
    devtool : config.devtools
  },
  {
    name   : 'media bundle',
    entry  : config.media,
    output : {
      filename   : 'media.js',
      path       : path.resolve(__dirname, 'build')
    },
    module : {
      loaders : [
        {
          test   : /\.(eot|ico|ttf|woff|woff2|gif|jpe?g|png|svg)$/,
          loader : 'file-loader'
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
      extensions : ['', '.css', '.js', '.scss', '.webpack.js', '.web.js']
    },
    devtool : config.devtools
  }
]
/* eslint-enable */

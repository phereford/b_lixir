// For info about this file refer to webpack and webpack-hot-middleware documentation
// Rather than having hard coded webpack.config.js for each environment, this
// file generates a webpack config for the environment passed to the getConfig method.
var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),

  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true})
];

var loaders = [
  { test: /\.js$/, include: path.join(__dirname, 'web/static/js'), loaders: ['babel', 'eslint'] },
  { test: /(\.css|\.scss)$/, include: path.join(__dirname, 'web/static/css'), loaders: ['style', 'css', 'sass'] }
];

var entry = [ './web/static/js/index' ];

module.exports = {
  debug: true,
  devtool: 'source-map', //more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, //set to false to see a list of every file being bundled.
  entry: entry,
  target: 'web', //necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: __dirname + '/priv/static/js',
    publicPath: '/js',
    filename: 'app.js'
  },
  plugins: plugins,
  module: {
    loaders: loaders
  }
};

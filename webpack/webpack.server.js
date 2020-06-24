const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  entry: path.resolve(__dirname, '..', 'src', 'server', 'server-renderer.js'),
  externals: [nodeExternals()],
  output: {
    filename: 'server-renderer.js',
    path: path.resolve(__dirname, '..', 'build', 'node'),
    publicPath: `/build/node/`,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

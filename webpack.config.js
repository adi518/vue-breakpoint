// https://github.com/noamkfir/webpack/tree/webpack-4/template

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './docs-src/src/export/external.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'docs-src/src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            '@babel/plugin-transform-modules-commonjs',
            '@babel/plugin-proposal-object-rest-spread'
          ]
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  mode: 'production'
}

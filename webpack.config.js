// https://github.com/noamkfir/webpack/tree/webpack-4/template

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // eslint-disable-line
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = {
  entry: './docs-src/src/export/external.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.join(__dirname, 'docs-src/src'),
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
            '@babel/plugin-proposal-object-rest-spread',
            'babel-plugin-transform-vue-jsx',
            'babel-plugin-syntax-jsx',
            'babel-plugin-lodash'
          ]
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new LodashModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  mode: 'production'
}

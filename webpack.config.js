const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, 'docs-src', dir)
}

module.exports = {
  entry: './docs-src/src/export/external.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    // libraryTarget: 'cjs'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('src'),
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

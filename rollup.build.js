const path = require('path')
const rollup = require('rollup')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const alias = require('rollup-plugin-alias')
const VuePlugin = require('rollup-plugin-vue')
const minify = require('rollup-plugin-minify-es')
const analyzer = require('rollup-plugin-analyzer')

const inputOptions = {
  input: './docs-src/src/components/export.js',
  plugins: [
    commonjs(),
    resolve({ extensions: ['.js', '.vue'] }),
    alias({ '@': path.resolve('docs-src/src') }),
    VuePlugin.default(),
    minify(),
    analyzer.plugin()
  ]
}

const outputOptions = {
  name: 'VBreakpoint',
  file: './dist/index.min.js',
  format: 'umd',
  exports: 'named',
  // sourcemap: true
}

async function build() {
  const bundle = await rollup.rollup(inputOptions)
  await bundle.write(outputOptions)
}

build()
  .then(() => { console.log('👌') })
  .catch(err => console.error(err.message, err.stack))

import babel from 'rollup-plugin-babel'
import inject from 'rollup-plugin-inject'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const config = []
const plugins = [
  inject({
    include: '**/*.js',
    exclude: 'node_modules/**',
    $: 'jquery'
  }),
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**'
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser({
    output: {
      comments () {
        return false
      }
    }
  }))
}

let out = 'dist/element-table.js'
if (process.env.NODE_ENV === 'production') {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/install.js',
  output: {
    name: 'ElementTable',
    file: out,
    format: 'umd'
  },
  external: ['jquery'],
  plugins
})

export default config

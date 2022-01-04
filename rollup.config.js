import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import analyze from 'rollup-plugin-analyzer';
import * as pkg from './package.json';
const production = !process.env.ROLLUP_WATCH;
const sourcemap = !!process.env.sourcemap;
const compress = !!process.env.compress;

export default {
  input: 'src/index.ts',
  output: [
    {
      sourcemap: sourcemap,
      file: pkg.module,
      format: 'esm'
    },
    {
      sourcemap: sourcemap,
      file: pkg.main,
      format: 'cjs'
    },
    {
      sourcemap: sourcemap,
      file: pkg.umd,
      format: 'umd',
      name: pkg.name
    }
  ],
  cache: !production,
  plugins: [
    production && analyze(),
    commonjs(),
    resolve(),
    typescript(),
    // 压缩
    compress && terser()
  ]
};

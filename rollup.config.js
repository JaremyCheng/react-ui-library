import { resolve } from 'path';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';
import postcss from 'rollup-plugin-postcss';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import pkg from './package.json';
const production = !process.env.ROLLUP_WATCH;
const sourcemap = !!process.env.sourcemap;
const compress = !!process.env.compress;

const COMMON_OUTPUT_CONFIG = {
  globals: {
    react: 'React',
  },
};

export default {
  input: 'src/index.ts',
  output: [
    {
      ...COMMON_OUTPUT_CONFIG,
      sourcemap: sourcemap,
      file: pkg.module,
      format: 'esm',
    },
    {
      ...COMMON_OUTPUT_CONFIG,
      sourcemap: sourcemap,
      file: pkg.main,
      format: 'cjs',
    },
    {
      ...COMMON_OUTPUT_CONFIG,
      sourcemap: sourcemap,
      file: pkg.umd,
      format: 'umd',
      name: pkg.name,
    },
  ],
  cache: !production,
  plugins: [
    commonjs(),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve('src'),
        },
      ],
    }),
    nodeResolve({
      preferBuiltins: false,
    }),
    postcss({
      extensions: ['.css', '.less'],
      extract: production,
      minimize: production,
      sourceMap: !production,
    }),
    eslint({
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
      filterExclude: ['src/**/*.less', 'node_modules/**', 'dist/**'],
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    babel({ babelHelpers: 'runtime', exclude: '**/node_modules/**' }),
    compress && terser(),
    production && analyze(),
  ],
  external: ['react'],
};

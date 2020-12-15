import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

import pkg from './package.json';

const input = ['src/index.js'];

export default [
  {
    input,
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      nodeResolve({
        moduleDirectories: ['node_modules']
      }),
      babel({
        babelHelpers: 'bundled'
      }),
      terser()
    ],
    // external: ['msw'],
    output: {
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      name: 'msw-umd',
      esModule: false,
      sourcemap: true
    }
  }
];

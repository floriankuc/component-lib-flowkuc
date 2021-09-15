import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';

export default [
	{
		input: './src/index.ts',
		output: [
			{
				file: 'dist/index.js',
				format: 'cjs',
			},
			{
				file: 'dist/index.es.js',
				format: 'es',
				exports: 'named',
			},
		],
		plugins: [
			typescript({
				tsconfig: './tsconfig.json',
			}),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/preset-react'],
			}),
			url({
				// by default, rollup-plugin-url will not handle font files
				include: ['**/*.woff', '**/*.woff2'],
				// setting infinite limit will ensure that the files
				// are always bundled with the code, not copied to /dist
				limit: Infinity,
			}),
			resolve(),
			commonjs(),
			external(),
			terser(),
			svgr(),
		],
	},
	{
		input: './dist/dts/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'es' }],
		plugins: [
			dts(),
			del({
				targets: 'dist/dts',
				hook: 'buildEnd',
			}),
		],
	},
];

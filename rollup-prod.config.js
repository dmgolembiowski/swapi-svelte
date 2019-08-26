import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: 'src/main.js',
		output: {
			sourcemap: false,
			format: 'esm',
			name: 'app',
			file: 'public/bundle.js'
		},
		plugins: [
			svelte({
				// enable run-time checks when not in production
				dev: false,
				// we'll extract any component CSS out into
				// a separate file — better for performance
				css: css => {
					css.write('public/bundle.css');
				}
			}),
	
			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration —
			// consult the documentation for details:
			// https://github.com/rollup/rollup-plugin-commonjs
			resolve({
				browser: true,
				dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
			}),
			commonjs(),
	
			// If we're building for production (npm run build
			// instead of npm run dev), minify
			terser({
				module: true
			})
		],
		watch: {
			clearScreen: false
		}
	},
	{
		input: 'src/main.js',
		output: {
			sourcemap: false,
			format: 'iife',
			name: 'app',
			file: 'public/bundle.legacy.js'
		},
		plugins: [
			svelte({
				// enable run-time checks when not in production
				dev: false,
				// we'll extract any component CSS out into
				// a separate file — better for performance
				css: css => {
					css.write('public/bundle.css');
				}
			}),
	
			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration —
			// consult the documentation for details:
			// https://github.com/rollup/rollup-plugin-commonjs
			resolve({
				browser: true,
				dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
			}),
			commonjs(),
	
			babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				]
			}),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			terser()
		],
		watch: {
			clearScreen: false
		}
	}
];

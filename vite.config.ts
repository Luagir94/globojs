import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
	},
	build: {
		outDir: 'dist',
		emptyOutDir: false,
		rollupOptions: {
			input: {
				main: resolve(__dirname, './src/index.ts'),
			},
		},
		minify: 'esbuild',
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, './src/index.ts'),
			formats: ['es'],
			fileName: 'index',
		},
	},
})

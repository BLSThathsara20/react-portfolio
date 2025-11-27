import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import path from "path";
import sass from "sass";

export default defineConfig({
	// base: '/',
	plugins: [
		react(),
		ViteImageOptimizer({
			test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
			exclude: undefined,
			include: undefined,
			includePublic: true,
			logStats: true,
			ansiColors: true,
			svg: {
				multipass: true,
				plugins: [
					{
						name: "preset-default",
						params: {
							overrides: {
								removeViewBox: false,
								removeTitle: false,
							},
						},
					},
				],
			},
			png: {
				quality: 85,
			},
			jpeg: {
				quality: 85,
			},
			jpg: {
				quality: 85,
			},
			webp: {
				quality: 85,
			},
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "src/styles/variables" as *;`,
				includePaths: [path.resolve(__dirname, "src/styles")],
			},
		},
		devSourcemap: true,
	},
	build: {
		outDir: "dist",
		assetsDir: "assets",
		emptyOutDir: true,
		sourcemap: true,
		minify: "terser",
		terserOptions: {
			format: {
				comments: false,
			},
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "react-router-dom"],
					animations: ["framer-motion"],
					icons: ["lucide-react"],
				},
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",
				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
						return "assets/images/[name]-[hash][extname]";
					}
					if (/\.css$/.test(name ?? "")) {
						return "assets/css/[name]-[hash][extname]";
					}
					if (/\.(woff2?|eot|ttf|otf)$/.test(name ?? "")) {
						return "assets/fonts/[name]-[hash][extname]";
					}
					return "assets/[name]-[hash][extname]";
				},
			},
		},
		cssCodeSplit: true,
		cssMinify: "@parcel/css",
	},
	server: {
		port: 3000,
		strictPort: true,
		host: true,
	},
	preview: {
		port: 4000,
		strictPort: true,
		host: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	publicDir: "public",
});

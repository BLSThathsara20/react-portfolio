import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import path from "path";

/** Make built CSS non-render-blocking; critical hero CSS lives inline in index.html */
function asyncCssPlugin() {
	return {
		name: "async-css",
		transformIndexHtml: {
			order: "post",
			handler(html) {
				return html.replace(
					/<link rel="stylesheet"([^>]*href="[^"]+\.css"[^>]*)>/g,
					`<link rel="stylesheet"$1 media="print" onload="this.media='all'"><noscript><link rel="stylesheet"$1></noscript>`
				);
			},
		},
	};
}

export default defineConfig({
	plugins: [
		react(),
		asyncCssPlugin(),
		ViteImageOptimizer({
			test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
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
								cleanupIds: false,
							},
						},
					},
				],
			},
			png: { quality: 80 },
			jpeg: { quality: 80 },
			jpg: { quality: 80 },
			webp: { quality: 78 },
		}),
	],
	build: {
		outDir: "dist",
		assetsDir: "assets",
		emptyOutDir: true,
		sourcemap: false,
		target: "es2020",
		minify: "esbuild",
		cssCodeSplit: true,
		cssMinify: true,
		modulePreload: {
			polyfill: false,
			resolveDependencies(filename, deps) {
				// Keep home critical path lean: don't preload Framer / heavy secondary chunks
				return deps.filter(
					(d) => !d.includes("animations") && !d.includes("Playground")
				);
			},
		},
		reportCompressedSize: true,
		chunkSizeWarningLimit: 600,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (!id.includes("node_modules")) return;
					if (id.includes("framer-motion")) return "animations";
					if (id.includes("lucide-react")) return "icons";
					if (id.includes("react-helmet")) return "helmet";
					if (id.includes("react-router")) return "router";
					if (id.includes("react-dom") || id.includes("/react/")) return "vendor";
				},
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",
				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? "")) {
						return "assets/images/[name]-[hash][extname]";
					}
					if (/\.css$/.test(name ?? "")) {
						return "assets/css/[name]-[hash][extname]";
					}
					return "assets/[name]-[hash][extname]";
				},
			},
		},
	},
	esbuild: {
		drop: ["console", "debugger"],
		legalComments: "none",
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

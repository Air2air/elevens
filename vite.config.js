import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr({ exportAsDefault: true }),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: "Roboto",
            local: "Roboto",
            src: "/fonts/Roboto/*.ttf",
          },
          {
            name: "Roboto Condensed",
            local: "Roboto Condensed",
            src: "/fonts/Roboto_Condensed/*.ttf",
          },
          {
            name: "Source Sans Pro",
            local: "Source Sans Pro",
            src: "/fonts/Source_Sans_Pro/*.ttf",
          },
          {
            name: "Cousine",
            local: "Cousine",
            src: "/fonts/Cousine/*.ttf",
          },
        ],
        display: "auto",
        preload: true,
      },
    }),
  ],
  define: {
    "process.env": {},
  },
  // root: 'src',
  // build: {
  //     outDir: '../dist'
  // },
  server: {
    port: 8000,
    maxSessionMemory: 100,
  },
});
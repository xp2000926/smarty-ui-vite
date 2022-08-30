import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
const  rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    assetFileNames: "[name].[ext]",
    exports: "named",
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  plugins: [
    vue(),
    // 添加JSX插件
    vueJsx(),
     // 添加UnoCSS插件
    Unocss()
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify:false,
    
    cssCodeSplit: true,   // 追加
    lib: {
      entry: "./src/entry.ts",
      name: "MinSmartyUI",
      fileName: "min-smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  },
});

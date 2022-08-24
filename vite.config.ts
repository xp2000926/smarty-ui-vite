// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from "./config/unocss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 添加JSX插件
    vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
    }),
     // 添加UnoCSS插件
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // })
    Unocss(),
  ],
   // 添加库模式配置
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        assetFileNames: "[name].[ext]",
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true,  // 生成压缩大小报告
    cssCodeSplit: true,   // 追加
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd","iife"], // 导出模块类型
    },
    outDir: "./dist",
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});
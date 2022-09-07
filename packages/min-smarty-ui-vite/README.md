<br>

<p align="center">
<img src="https://github.com/xp2000926/smarty-ui-vite/blob/main/packages/min-smarty-ui-vite/assets/logo.jpeg" style="width:200px;" />
</p>

<h1 align="center">min-smarty-ui-vite</h1>

<p align="center">
前端工程化学习模型
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/min-smarty-ui-vite"><img src="https://img.shields.io/npm/v/min-smarty-ui-vite?color=c95f8b&amp;label=NPM" alt="NPM version"></a>
    <a href="https://github.com/xp2000926/smarty-ui-vite/actions/workflows/main.yml"><img src="https://github.com/xp2000926/smarty-ui-vite/actions/workflows/main.yml/badge.svg?branch=main" alt="CI" style="max-width: 100%;"></a>
    <img src="https://img.shields.io/github/license/xp2000926/smarty-ui-vite">
    <a href="https://codecov.io/gh/xp2000926/smarty-ui-vite"><img src="https://codecov.io/gh/xp2000926/smarty-ui-vite/branch/main/graph/badge.svg?token=34A0E1YVWF"/> </a>
</p>

<br>
<br>

## Features

前端工程化演示项目。

- 基于 Vue 框架
- 支持 JSX 与 Vue 单文件组件
- Jest + Vue3 plugins 实现单元测试
- Eslint + Prettier + Husky 语法检查
- Vitepress + Vercel 文档网站搭建
- 基于 Action CI 实现持续集成与交付

## Install

```bash
npm i min-smarty-ui-vite
```

## Quick Start

```js
import Vue from 'vue'
import App from './App.vue'
import 'min-smarty-ui-vite/entry.css'
import MinSmartyUI from 'min-smarty-ui-vite'
createApp(App).use(MinSmartyUI).mount("#app")
```

<p align="center">
<img src="../../assets/logo.png" style="width:200px;" />
</p>
<h1 align="center">Min-Smarty-UI</h1>
<p align="center">
五脏俱全的组件库学习模型
</p>

## Features

前端工程化演示项目。
- 基于Vue框架
- 支持JSX与Vue单文件组件
- Jest + Vue3 plugins实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用Rollup构建
- Vitepress + Vercel 文档网站搭建
- 基于Action CI 实现持续集成与交付

## Install
```bash
npm i min-smarty-ui-vite
```
## Quick Start
```js
import Vue from 'vue'
import MinSmartyUI from 'min-smarty-ui-vite'

const App = {
template: `
        <MyButton/>
    `,
};

createApp(App)
.use(MinSmartyUI)
.mount("#app");
```
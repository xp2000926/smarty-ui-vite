## min-smarty-ui-vite

### 下载依赖

```bash
pnpm i
```

### 运行

```bash
pnpm dev
```

### 打包

```bash
pnpm build
```

### 单元测试

```bash
pnpm test
```

```bash
.
├── config # 配置文件
├── coverage # 覆盖率报告
├── demo # 代码范例
├── docs # 文档
├── node_modules  
├── scripts # 脚本 发布、提交信息检查
├── src # 组件代码
│   └── button # 组件包名
│        ├── index.ts # 组件入口
│        ├── Button.tsx # 组件代码  
│        └── __tests__ # 测试用例
│                 └── Button.spec.ts   
└── types # TS类型定义
```
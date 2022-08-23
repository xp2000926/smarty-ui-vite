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

## git 
```bash
git clone https://github.com/xp2000926/smarty-ui-vite.git #克隆

git add . #添加到暂存区

git commit -m "chore: 备注所修改的内容" # 提交的备注信息

git push #添加到远程仓库

npm publish #本地发包
```

## 项目目录
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
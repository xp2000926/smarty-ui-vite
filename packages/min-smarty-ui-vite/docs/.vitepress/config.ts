const sidebar = {
    '/': [
      { text: "介绍", link: "/" },
      {
        text: '通用',
        children: [
          { text: 'Button 按钮', link: '/components/button/' },
        ]
      },
      { text: '导航' },
      { text: '反馈' },
      { text: '数据录入' },
      { text: '数据展示' },
      { text: '布局' },
    ]
  }
const config = {
    title: "🔨  min-smarty-ui-vite",
    description: "前端工程化学习模型",
    themeConfig: {
      sidebar,
    },
    markdown: {
      config: (md) => {
        // 添加DemoBlock插槽
        const { demoBlockPlugin } = require("vitepress-theme-demoblock");
        md.use(demoBlockPlugin);
      },
    },
}
export default config

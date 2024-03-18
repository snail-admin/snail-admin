import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "snail-admin | 官方",
  description: "snail-admin官方网站",
  themeConfig: {
    siteTitle: 'Snail_Admin',
    logo: '/planet.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '资源', link: '/markdown-examples' },
      { text: '样例', link: '/markdown-examples' },
      { text: '学习笔记', link: '/study/studyNotes' }
    ],

    sidebar: [
      {
        items: [
          {
            text: '学习笔记',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Vue学习笔记', link: '/study/vue.md' },
              { text: 'React学习笔记', link: '/study/react.md' },
              { text: 'Node学习笔记', link: '/study/node.md' },

            ]
          },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
   
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present snail-admin',
    },
  },
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
  },

})
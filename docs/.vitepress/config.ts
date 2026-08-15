/*
 * @Author: Skixkk skixkk7@gmail.com
 * @Date: 2026-08-15 12:01:04
 * @LastEditors: Skixkk skixkk7@gmail.com
 * @LastEditTime: 2026-08-15 13:38:51
 * @FilePath: \runsme-com\docs\.vitepress\config.ts
 * @Description: config file
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/runsme-com/',

  title: "runsme",
  description: "The project plan and management repository of the Runsme team.",


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'runsme',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

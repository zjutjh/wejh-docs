import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/wejh-docs/",
  title: "微精弘开发文档",
  description: "docs for wejh weapp development",
  themeConfig: {
    nav: [
      { text: "前端文档", link: "/frontend/" },
      { text: "后端文档", link: "/backend/" },
      { text: "仓库维护文档", link: "/repository/" },
    ],
    sidebar: {
      "/frontend/": [
        {
          text: "构建配置",
          items: [
            { text: "字体", link: "/frontend/build/font" },
            { text: "环境变量", link: "/frontend/build/env" },
            { text: "打包体积", link: "/frontend/build/build-size" },
            { text: "小程序调试", link: "/frontend/build/debug" },
          ]
        },
        {
          text: "业务归类",
          items: [
            { text: "版本更新", link: "/frontend/business/version" },
            { text: "主题色", link: "/frontend/business/color" },
          ]
        },
        {
          text: "其他",
          items: [
            { text: "常见问题处理", link: "/frontend/other/issues" },
          ]
        }
      ]
    },
    footer: {
      message: "内部资料，请勿外传",
      copyright: "Copyright © 2023-present zjutjh-tech"
    },
  }
})


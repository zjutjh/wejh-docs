# 打包体积

## 不同环境下的体积

- 开发环境的体积偏大，支持热更新
- 生产环境的体积偏小，不支持热更新，上传到体验版**一定要选这个**

> 开发环境下小程序(v2.4.0)体积2MB多一点，生产环境下约 650KB。
>
> v2.0 开发环境产物体积在 1.5MB 左右

## 真机调试对包体积的限制

真机调试对包大小有要求，要求包体积小于 2MB。所以开发环境小程序是无法进行真机调试的，真机调试前需要 `pnpm build:weapp` 构建生产环境产物，这样也就失去了开发环境的热更新特性。

## 节省包体积

小程序功能增多，代码体积自然会变大，当然也有放缓增大速度的方案。

1. 使用第三方依赖要使用支持 ES-Module 的，这样 Webpack 能按需打包。
2. 干脆别用第三方依赖。
3. 有些功能必须要大体积依赖支持的，可以考虑让后端实现部分需求。
4. 遇到一定要静态使用图片的需求，记得给图片先压缩了再放到项目中（一般压缩成 webp）

## 分析模块体积

分析**依赖/模块**体积可以使用 [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) 

```js
// config/index.js

const config = {
  mini: {
    webpackChain (chain) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
  }
}

```

配置好之后编译小程序应该会自动打开一个页面，里面展示了项目中每个模块（包括依赖）的大小。

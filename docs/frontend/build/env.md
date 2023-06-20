# 环境变量

> 本来小程序项目环境变量是没有的，但是2023年5月份微精弘服务器受到了一次史无前例的打击，以及其他原因，于是前端项目决定使用环境变量来私有化项目中的一些配置。

## 介绍

项目本地需要新建一个 `/.env`  文件，按照 `/.env.example` 的格式，需要包含一些字段

```env
# 后端服务器地址
HOST=xxxxxxxxxxx

# 电费订阅的一个码
ELECTRICITY_SUBSCRIBE_TEMPLID=xxxxxxxxxxxxx
```

## `.env`

其中 `.env` 是开发环境本地私有的文件，**不能上传到公网上**，`.env.exmaple` 作为一个字段参考，可以传。当需要新的环境变量时，记得同时在 `.env` 和  `/.env.example` 中加上。

一般来说和小程序项目逻辑无关的变量，或者私有的变量，比如说开发者平台提供的一些类密钥啥的，需要放到环境变量

## 使用

代码中这样使用环境变量
```ts
console.log(process.env.ENV_VAR_NAME);
console.log(process.env.HOST);
```

读取环境变量使用 [dotenv](https://github.com/motdotla/dotenv) 实现，加载环境变量的代码在 `/config/index.js` 中声明。

## Changelog

支持解析本地环境变量
[fix(services): add fallback value when get null](https://github.com/zjutjh/WeJH-Taro/pull/39/commits/6939f49a128d7f0cdf9b8fe2ef6fc502ca3316e5)
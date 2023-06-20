# 版本更新

> **仓库 Release 版本之前要先找产品确认版本号**
> 
> 版本号的格式 `v[大版本].[小版本].[补丁号]`
> - v2.4.0 正式版本
> - v2.4.0-rc.3 发布一个小版本前的预览版
> 
> 在微精弘3.0 发布前，所有功能更新的版本都是小版本，BUG 修复提交是发布补丁

小程序的版本在三个地方出现

## 开发者平台

开发者平台的版本是由微信来维护的，和小程序代码无关

## 小程序代码

小程序内部需要通过持久化记录版本信息，在用户打开每次打开小程序都会查询包中的**版本信息常量 `updateInfo`** 和本地持久化的版本是否不同（查询相关逻辑在 `/src/pages/index/index.vue`），从而实现在用户第一次打开新版本时显示**版本更新提示**。

目录 `/src/constants/updateInfo` 下的 `updateInfo` 就是小程序的**版本信息常量**。

版本的提示包含这些部分

```ts
type UpdateInfoType = {
  // 版本信息 e.g. v2.4.0
  version: string;
  // 更新公告标题
  title: string;
  // 更新公告内容
  content: string;
  // 提示面板的操作（可缺省
  actions?: {
	// 取消按钮
    cancel: {
      label: string;
      callback?: () => void;
    },
    // 确认按钮
    confirm: {
      label: string;
      callback?: () => void;
    }
  }
}
```

其中里面的 `version` 控制小程序端是否弹出更新提示，这是由产品决定的，所以小程序代码在发布小版本更新后，又迭代了几次补丁更新，可以在**仓库或者小程序平台**上更新版本号。

但是具体是否要给用户**弹出补丁更新提示**，这是需要产品来决定的（一般是不需要，所以只有发布小版本了才会改 `version`，平时修修 BUG提交代码是不需要改的）

产品在新版本的开发周期中，需要一定次数的代码提交，那么`version`该什么时候改？在测试完毕项目上线的前夕，决定不再提交了，就可以在代码中修改`updateInfo`，其中的`version`和`content`需要产品提供。同时发布一条项目更新提交，一般格式如此 `chore(*): release v.2.4.0`，别忘了给提交打上 Tag，推送到仓库。

总的来说 `updateInfo` 只有在发布小版本，并且需要用户知晓更新内容的时候改，不然最好别改。

## 小程序仓库

仓库的 Release 版本，原则上要和开发者平台的版本保持一致，发布一个补丁就可以 Release 一次，当然也可以不 Release.  当然发布一个小版本需要

小版本正式版发布前，预览版(RC 版)可发可不发

## Changelog

版本更新公告面板中支持自定义按钮来执行操作
- [feat(update): update update info for electricity subscribe #40](https://github.com/zjutjh/WeJH-Taro/pull/40)
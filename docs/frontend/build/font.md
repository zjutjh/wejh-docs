# 字体&图标

## 字体

小程序中的**英文字和数字以及一些符号**的字体是[《阿里巴巴普惠体》](https://fonts.alibabagroup.com/#/home)，这个字体是包括汉字的，因为考虑到项目打包体积问题，项目使用 [fontmin](https://github.com/ecomfe/fontmin) 对部分字符进行提取，得到了一个新的字体集文件。

早期开发 Taro 无法直接加载字体文件，应用到小程序中，所以使用了 [transfont](https://transfonter.org)将字体文件转换成 Base64，并放到了 css 中`/src/style/puhuiti.scss`，这样使得小程序能够加载。

> 因为我们的字体只包含**英文，数字，一些符号**，所以其他字符的字体配置会 fallback 到微信的小程序容器，由外部环境来决定其他字符是什么字体。比如说有些用户手机换了字体，小程序中中文字的字体变了，但是英文这些还是我们设置的字体。

## 图标

小程序中的图标理论上需要从小弘给出的设计稿中扣出来（导出svg），但是这样做效率实在低下，并且图标的尺寸可能不齐，需要前端单独修复。于是前端使用 [iconfont](https://www.iconfont.cn)**收集并管理**图标。

> 小弘的图标大多数都能在 iconfont 找的一模一样的，可是他们就是给不出链接，只是提供图标文件或者是放在设计稿内。这方面和小弘提过，不过还是没听进去

iconfont 按照项目来管理图标，能根据图标集合**导出一份字体文件`iconfont.ttf`**（不再是一个一个的 svg 文件了），**所以前端的开发需要找前辈加入我们的在 iconfont 上的图标项目。**

同样地，图标字体需要通过 transfont 导出成 Base64，在 css 中使用。图标的使用方式不仅仅是加载字体，还需要在 css `/src/style/icons.scss` 中建立对应的映射，即把字体文件(Base64)中的字型码对应成 css 类名，在 DOM 中给元素设置相应的类名，就会加载相应的文字，只不过这种文字的形状是一个 icon。

类名可以自己定义，那么如何得知字体文件中都有哪些字型码呢？可以从 iconfont 导出的产物`iconfont.css`里面获取类名和字型码的映射，

```diff
iconfont 导出产物

- demo.css
- demo_index.html
+ iconfont.css
- iconfont.js
- iconfont.json
+ iconfont.ttf
- iconfont.woff
- iconfont.woff2
```

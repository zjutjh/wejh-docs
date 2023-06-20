# tabbar

考虑到业务复杂性，项目使用的 tabbar 是纯自定义组建，不是微信原生的（不会被微信当作 tabbar 编译）。同时，tabbar 对应的两个页面也是用自定义路由实现的单页面。

小程序中有两类页面：
1. 普通页面，通过 [`Taro.navigateTo(option)`](https://docs.taro.zone/docs/apis/route/navigateTo) 跳转，保存在页面栈中。跳转一次，原页面被新页面覆盖，但是页面所有的状态被保留。退出页面，页面栈栈顶页面出栈，状态被销毁。切换页面有动画，应该好理解。
2. tabbar 页面，通过 [`Taro.switchTab(option)`](https://docs.taro.zone/docs/apis/route/switchTab) 跳转，不同 tabbar 页面同级。切换页面并不是新页面覆盖到原页面之上，而是类似于 MPA 的页面切换，原页面状态被保留，新页面被呈现出来

项目中“首页“和“我的”在代码中的逻辑为两个组件，使用自定义路由在两页之间跳转，会反复地触发页面渲染。这样会使得一些状态及时重置同步，但也会带来一些不必要的请求，可以考虑使用微信原生的 tab。

微信原生的 tabbar 会在对应页面挂载时渲染，tabbar 页第一次被挂载，之后再次跳转至 tabbar 页不会重新挂载，可以理解为无论何时，页面和其中的状态一直存在。

参照以下链接重构 tabbar，可以缓解服务器压力以及改善对本机的性能消耗
- [Taro-微信小程序自定义 Tabbar](https://docs.taro.zone/docs/custom-tabbar)

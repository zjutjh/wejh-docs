# Store

## 持久化注意事项

内存中的 JS 变量，使用 vuex-persistedstate 包进行持久化，内部通过 `JSON.stringify()` 转换成字符串，储存在小程序物理媒介中，所以设置状态的时候不要设置 `undefined` ，会丢失属性！！！
```js
const obj1 = {
	value: undefined
};

JSON.stringify(obj1); // '{}'
```

需要设置空值使用 `null` 代替
```js
const obj2 = {
	value: null
};

JSON.stringify(obj2); // '{"value":null}'
```

## 迁移至 Pinia

项目使用 [vuex4](https://github.com/vuejs/vuex) 进行状态持久化，vuex 对于 Typescript 的支持不是很好，可以考虑将状态管理工具迁移到 [Pinia](git@github.com:vuejs/pinia.git)

vuex 仓库建议先 vuex 和 pinia 共存，逐步迁移。如果要完全迁移，需要考虑**用户侧已存在的持久化状态**能被正常读取

在小程序开发平台 DevTools 上可以看到，所有持久化状态被储存在一项数据中

```json
"vuex": {
	"services": { ... },
	"system": { ... }
}
```

如果用 Pinia 创建多个 Store，应该是和这个状态独立的，考虑到用户体验，无法直接迁移。参考 Pinia 文档的[这段](https://pinia.vuejs.org/cookbook/migration-vuex.html#converting-a-single-module)，可以在 Store 返回 vuex 的状态，配合[持久化插件](https://github.com/prazdevs/pinia-plugin-persistedstate)，即可在一个版本内将状态复刻至 Pinia，项目迭代多个版本或者一段时间后，验证了 Pinia 状态的普及性，可以考虑删除原有的 vuex 代码。
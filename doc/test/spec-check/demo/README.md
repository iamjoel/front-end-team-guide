# 单元测试 Demo
用 [Jest](https://jestjs.io/docs/zh-Hans/getting-started) 和 [Vue Test Utils](https://vue-test-utils.vuejs.org/zh/) 来做单元测试。

测试代码会靠近被测试的代码。

## 功能
* JavaScript 测试
  * [常规测试](src/utils/hello-world.spec.js)
  * [异步代码的测试]((src/utils/async-fn.spec.js))
* [Vue 组件测试](src/components/hello-world.spec.js)

## 安装
```
yarn install
```

### 启动
```
yarn serve
```

### 构建
```
yarn build
```

### 测试
```
yarn test:unit
```

### Lint
```
yarn lint
```

### 配置参考
See [Configuration Reference](https://cli.vuejs.org/config/).

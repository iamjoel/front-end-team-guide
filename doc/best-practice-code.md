# 常见场景的最佳实践
## 全局数据
用 Vuex 来存。

## Vue 组件通信
兄弟组件间的通信：在父组件中，用Event Bus 来处理。
```
let Event=new Vue()
Event.$emit(事件名,数据)
Event.$on(事件名,data => {})
```

深层次的组件交互用 provide 和 inject 配合 Vue.observable。

## 异步处理
用 await 和 async。

## 管理后台 列表页

## 管理后台 详情页
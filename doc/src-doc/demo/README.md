# 可交互的组件|JS文档
用的 [Stroy Book](https://github.com/storybookjs/storybook)。

## 运行
```
npm run doc
```

## 生成静态文档
```
npm run doc:build
```

## 说明
## 给 文档 加分类
文档的 title 中加 `/`。如
```
export default {
  title: '某分类/组件名'
}
```

## 自定义组件文档内场景的名称
```
export const Type = () => ({
  
})

Type.story = {
  name: '自定义名称，否则是 Type',
}
```
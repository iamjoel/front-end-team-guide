# 代码格式
代码格式遵循 [JavaScript Standard Style](https://github.com/sheerun/prettier-standard)。

具体规则见 [这里](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md#javascript-standard-style)。

## 应用
* 实现：格式化代码。用 [Prettier](https://github.com/prettier/prettier)。
* 实现：将代码格式成符合 JavaScript Standard Style。 用 [Prettier-standard](https://github.com/sheerun/prettier-standard)。
* 配置一些自定义格式化选项。添加 `.prettierrc`， 如 `"eqeqeq": "off"`。
* git 提交前验证代码格式。[husky](https://github.com/typicode/husky) 和 [lint-staged](https://github.com/okonet/lint-staged)。

具体见： [demo](demo)。 该 demo 中：
* `npm run format`: 格式化所有 `src` 下的 js, css, vue, html 文件。
* `npm run format:commit`: 格式化所有改动的 `src` 下的 js, css, vue, html 文件。
* `npm run format:check`: 检查所有 `src` 下所有的 js, css, vue, html 文件的格式。


# 代码风格
## 格式
代码风格遵循：

1. [JavaScript Standard Style](https://github.com/sheerun/prettier-standard)。 
1. 额外的代码风格的验证。规则见[这里](more-rule.md)。


使用 JavaScript Standard Style 使用的原因：

* 无须配置。 史上最便捷的统一代码风格的方式，轻松拥有。
* 自动代码格式化。 只需运行 standard --fix 从此和脏乱差的代码说再见。
* 提前发现风格及程序问题。 减少代码审查过程中反反复复的修改过程，节约时间。

具体规则见 [这里](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md#javascript-standard-style)。

## 应用
* 实现：格式化代码。用 [Prettier](https://github.com/prettier/prettier)。
* 实现：将代码格式成符合 JavaScript Standard Style。 用 [Prettier-standard](https://github.com/sheerun/prettier-standard)。
* 实现：配置一些自定义格式化选项。添加 `.prettierrc`， 如 `"eqeqeq": "off"`。 所有支持的规则见 [这里](https://prettier.io/docs/en/options.html)。
* 实现：额外的验证。 用 [ESLint](http://eslint.cn/) 及相关插件。
* 实现：文件名的验证。 直接写的个验证脚本，见[这里](scripts/lint-file-name.js)。
* git 提交前验证代码格式。[husky](https://github.com/typicode/husky) 和 [lint-staged](https://github.com/okonet/lint-staged)。

具体见： [demo](demo)。


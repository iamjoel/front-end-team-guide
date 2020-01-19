module.exports = {
  "parserOptions": {
    "ecmaVersion": 6
  },
  // http://eslint.cn/docs/rules/
  "rules": {
    // 代码风格
    "camelcase": "error", // 驼峰
    // 减少低级错误：
    "for-direction": "error", // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    "no-cond-assign": "error", // 禁止条件表达式中出现赋值操作符
    "no-dupe-args": "error", // 禁止 function 定义中出现重名参数
    "no-dupe-keys": "error", // 禁止对象字面量中出现重复的 key
    "no-duplicate-case": "error", // 禁止出现重复的 case 标签
    "no-empty": "error", // 禁止出现空语句块
    "no-sparse-arrays": "error", // 禁用稀疏数组
    "no-unreachable": "error", // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    // 提高代码质量
    "array-callback-return": "error", // 强制数组的某些需要返回值的回调函数中有 return 语句。
    "block-scoped-var": "error", // 强制把变量的使用限制在其定义的作用域范围内
    "default-case": "error", // 要求 switch 语句中有 default 分支
    "no-empty-function": "error", // 禁止出现空函数
    "no-fallthrough": "error", // 禁止 case 贯穿。
    "no-labels": "error", // 禁用标签语句
    "no-redeclare": "error", // 禁止多次声明同一变量
    "no-return-assign": ["error", "always"], // 禁止在返回语句中赋值
    "no-sequences": "error", // 不允许使用逗号操作符
    "no-useless-concat": "warn", // 禁止不必要的字符串字面量或模板字面量的连接,
    "no-eval": "error", // 禁用 eval()
    "no-unused-vars": "warn", // 禁止出现未使用过的变量
    "no-use-before-define": ["error", {"functions": false}], // 禁止在变量定义之前使用它们
    "complexity": ["error", { "max": 10 }], // 程序中允许的最大环路复杂度
    "consistent-return": "error", // 要求 return 语句要么总是指定返回的值，要么不指定
    "max-depth": ["error", 5], // 强制块语句的最大可嵌套深度
    "max-lines-per-function": ["warn", 50], // 强制函数最大行数
    "max-params": ["warn", 4], // 限制函数定义中最大参数个数
    "require-await": "error", // 禁止使用不带 await 表达式的 async 函数
    
    // es6
    "no-var": "warn", // 要求使用 let 或 const 而不是 var
    "no-duplicate-imports": "warn", // 禁止重复模块导入
    "prefer-destructuring": "warn", // 优先使用数组和对象解构
    "prefer-template": "warn" // 要求使用模板字面量而非字符串连接
  }
}
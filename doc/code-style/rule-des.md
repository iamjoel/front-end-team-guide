# 验证说明
# 代码风格
## [camelcase](http://eslint.cn/docs/rules/camelcase)
强制使用骆驼拼写法命名约定。

错误写法：

```javascript
var my_favorite_color = "#112C85"
```

正确写法：

```javascript
var myFavoriteColor   = "#112C85";
var _myFavoriteColor  = "#112C85";
var myFavoriteColor_  = "#112C85";
var MY_FAVORITE_COLOR = "#112C85";
```

# 减少低级错误
## [for-direction](http://eslint.cn/docs/rules/for-direction)
强制 “for” 循环中更新子句的计数器朝着正确的方向移动。

错误写法：

```javascript
for (var i = 0; i < 10; i--) {
}

for (var i = 10; i >= 0; i++) {
}
```

正确写法：

```javascript
for (var i = 0; i < 10; i++) {
}
```

## no-cond-assign
禁止条件表达式中出现赋值操作符

错误写法:

```javascript
if (user.jobTitle = "manager") {  
}
```

## no-dupe-args
禁止 function 定义中出现重名参数

错误写法：

```javascript
function foo(a, b, a) {
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};
```

正确写法:

```javascript
function foo(a, b, c) {
    console.log(a, b, c);
}

var bar = function (a, b, c) {
    console.log(a, b, c);
};
```

## no-dupe-keys
禁止对象字面量中出现重复的 key

错误写法:

```javascript
var foo = {
    bar: "baz",
    bar: "qux"
};
```

正确写法:

```javascript
var foo = {
    bar: "baz",
    quxx: "qux"
};
```

## no-duplicate-case
禁止出现重复的 case 标签

错误写法:

```javascript
var a = 1,
    one = 1;

switch (a) {
    case 1:
        break;
    case 2:
        break;
    case 1:        
        break;
    default:
        break;
}
```

正确写法:

```javascript
var a = 1,
    one = 1;

switch (a) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
        break;
}
```

## no-empty
禁止出现空语句块。

错误写法:

```javascript
if (foo) {
}

while (foo) {
}
```


正确写法：

```javascript
if (foo) {
    doSomething();
}

while (foo) {
    doSomething();
}
```

## no-sparse-arrays
禁用稀疏数组

错误写法:

```javascript
var items = [,];
var colors = [ "red",, "blue" ];
```

正确写法：

```javascript
var items = [];
var items = new Array(23);
var colors = [ "red", "blue", ];
```


## no-unreachable
禁止在 return、throw、continue 和 break 语句之后出现不可达代码

错误写法:

```javascript
function foo() {
    return true;
    console.log("done");
}

function bar() {
    throw new Error("Oops!");
    console.log("done");
}

while(value) {
    break;
    console.log("done");
}
```


正确写法:

```javascript
function foo() {
    return bar();
    function bar() {
        return 1;
    }
}

function bar() {
    return x;
    var x;
}

switch (foo) {
    case 1:
        break;
        var x;
}
```


# 提高代码质量
## array-callback-return 
强制数组的某些需要返回值的回调函数中有 return 语句。

错误写法:

```javascript
var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
}, {});

var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
});
```

正确写法：

```javascript
var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
    return memo;
}, {});

var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
    return false;
});
```


## block-scoped-var
强制把变量的使用限制在其定义的作用域范围内

错误写法:<br />

```javascript
function doIf() {
    if (true) {
        var build = true;
    }

    console.log(build);
}

function doIfElse() {
    if (true) {
        var build = true;
    } else {
        var build = false;
    }
}
```


正确写法:

```javascript
function doIf() {
    var build;

    if (true) {
        build = true;
    }

    console.log(build);
}

function doIfElse() {
    var build;

    if (true) {
        build = true;
    } else {
        build = false;
    }
}
```


## default-case
要求 switch 语句中有 default 分支

错误写法:

```javascript
switch (a) {
    case 1:
        /* code */
        break;
}
```

正确写法:

```javascript
switch (a) {
    case 1:
        /* code */
        break;

    default:
        /* code */
        break;
}
```


## no-empty-function
禁止出现空函数

错误写法：

```javascript
function foo() {}

var foo = function() {};

var foo = () => {};

function* foo() {}

var foo = function*() {};
```


正确写法:

```javascript
function foo() {
    // do nothing.
}

var foo = function() {
    // any clear comments.
};

var foo = () => {
    bar();
};

function* foo() {
    // do nothing.
}

var foo = function*() {
    // do nothing.
};
```

# no-fallthrough
禁止 case 贯穿

错误写法：

```javascript
switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomething();
}
```

正确写法:

```javascript
switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
        break;
}

```
# 
## no-labels 
禁用标签语句

错误写法:

```javascript
label:
    while(true) {
        break label;
    }

label:
    while(true) {
        continue label;
    }
```


正确写法:

```javascript
var f = {
    label: "foo"
};

while (true) {
    break;
}

while (true) {
    continue;
}
```


## no-redeclare
禁止多次声明同一变量

错误写法:

```javascript
var a = 3;
var a = 10;
```


正确写法:

```javascript
var a = 3;
a = 10;
```


## no-return-assign
禁止在返回语句中赋值

错误写法：

```javascript
function doSomething() {
    return foo = bar + 2;
}

function doSomething() {
    return foo += 2;
}
```


正确语法:

```javascript
function doSomething() {
    return foo == bar + 2;
}

function doSomething() {
    return foo === bar + 2;
}
```


## no-sequences
不允许使用逗号操作符

错误写法:

```javascript
foo = doSomething(), val;

0, eval("doSomething();");

do {} while (doSomething(), !!test);

for (; doSomething(), !!test; );

if (doSomething(), !!test);
```

正确写法:

```javascript
foo = (doSomething(), val);

(0, eval)("doSomething();");

do {} while ((doSomething(), !!test));

for (i = 0, j = 10; i < j; i++, j--);

if ((doSomething(), !!test));
```


## no-useless-concat
禁止不必要的字符串字面量或模板字面量的连接

错误写法:

```javascript
var a = `some` + `string`;
var a = '1' + '0';
var a = '1' + `0`;
var a = `1` + '0';
```

正确写法:

```javascript
var c = a + b;
var c = '1' + a;
var a = 1 + '1';
var c = 1 - 2;
```


## no-eval
禁用 eval()

错误写法:

```javascript
var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

this.eval("var a = 0");
```

正确写法:

```javascript
var obj = { x: "foo" },
    key = "x",
    value = obj[key];
class A {
    foo() {
        this.eval("var a = 0");
    }
    eval() {
    }
}
```


## no-unused-vars
禁止出现未使用过的变量

错误写法：

```javascript
some_unused_var = 42;
var x;

var y = 10;
y = 5;

var z = 0;
z = z + 1;

(function(foo) {
    return 5;
})();
```

正确写法：

```javascript
var x = 10;
alert(x);

myFunc(function foo() {
    // ...
}.bind(this));

(function(foo) {
    return foo;
})();

var myFunc;
myFunc = setTimeout(function() {
    myFunc();
}, 50);
```


## no-use-before-define
禁止在变量定义之前使用它们

错误写法:

```javascript
alert(a);
var a = 10;

f();
function f() {}

function g() {
    return b;
}
var b = 1;
```


正确写法：

```javascript
var a;
a = 10;
alert(a);

function f() {}
f(1);

var b = 1;
function g() {
    return b;
}
```


## complexity
程序中允许的最大环路复杂度

错误写法:

```javascript
function a(x) {
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else {
        return 4; // 3rd path
    }
}
```


正确写法:

```javascript
function a(x) {
    if (true) {
        return x;
    } else {
        return 4;
    }
}
```


## max-depth
强制块语句的最大可嵌套深度

错误写法：

```javascript
function foo() {
    for (;;) { // Nested 1 deep
        let val = () => (param) => { // Nested 2 deep
            if (true) { // Nested 3 deep
                if (true) { // Nested 4 deep
                    if (true) { // Nested 5 deep
                    }
                }
            }
        };
    }
}
```

正确写法:

```javascript
function foo() {
    for (;;) { // Nested 1 deep
        let val = () => (param) => { // Nested 2 deep
           if (true) { // Nested 3 deep
                if (true) { // Nested 4 deep
                }
            }
        };
    }
}
```


## max-lines-per-function
强制函数最大行数

错误写法：

```javascript
function foo() {
    var x = 0;
}
```

正确写法:

```javascript
function foo() {
    var x = 0;
}
```

## max-params
限制函数定义中最大参数个数

错误写法:

```javascript
function foo (bar, baz, qux, qxx) {
    doSomething();
}

let foo = (bar, baz, qux, qxx) => {
    doSomething();
};
```

正确写法:

```javascript
function foo (bar, baz, qux) {
    doSomething();
}

let foo = (bar, baz, qux) => {
    doSomething();
};
```


## require-await
禁止使用不带 await 表达式的 async 函数

错误写法:

```javascript
async function foo() {
    doSomething();
}

bar(async () => {
    doSomething();
});
```

正确写法:

```javascript
async function foo() {
    await doSomething();
}

bar(async () => {
    await doSomething();
})
```

# ES6

## no-var
要求使用 let 或 const 而不是 var

错误写法：
```javascript
var x = "y";
var CONFIG = {};
```

正确写法：

```javascript
let x = "y";
const CONFIG = {};
```

## no-duplicate-imports
禁止重复模块导入

错误写法：

```javascript
import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
```

正确写法:

```javascript
import { merge, find } from 'module';
import something from 'another-module';
```

## prefer-destructuring
优先使用数组和对象解构

错误写法:

```javascript
var foo = array[0];
var foo = object.foo;
var foo = object['foo'];
```

正确写法：

```javascript
var [ foo ] = array;
var { foo } = object;
let foo;
({ foo } = object);
```

## prefer-template
要求使用模板字面量而非字符串连接

错误写法：

```javascript
var str = "Hello, " + name + "!";
var str = "Time: " + (12 * 60 * 60 * 1000);
```

正确写法：

```javascript
var str = `Hello, ${name}!`;
var str = `Time: ${12 * 60 * 60 * 1000}`;
```
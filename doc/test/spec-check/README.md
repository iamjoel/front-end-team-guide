# 功能(Spec)测试
是否满足功能的测试。 分为单元测试和集成测试。 代码优先做单元测试，人肉来做集成测试。

通常只要求对一些基础/底层的组件、框架或者服务进行测试, 视情况考虑是否要测试业务代码。

测试 主要给不同的输入，断言输出是否与预期一致。

测试JS，输入是不同的参数，断言的是
* 返回值。
* 是否会报错。
* 回调是否被调用，会被调用几次。

测试组件，以 Vue 组件为例，输入的是属性和Slot， 断言的是
* 在页面中的体现。 一般是检查DOM元素。
* 事件有没被调用。

测试的准则
* [Unit Testing Guidelines](https://petroware.no/unittesting.html)
* [阿里巴巴的<Java开发手册>中总结的单元测试准则](https://github.com/alibaba/p3c/blob/master/p3c-gitbook/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.md)
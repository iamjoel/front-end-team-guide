# 接口规范
接口规范用来约束接口的一致性。一个项目中，一堆不统一的接口，不利于前后端代码复用，降低开发效率。

下面是我们团队的接口规范。

## 协议
为确保数据交互安全，正式地址用HTTPS。

## 接口url
* 路径以 `api` 开始。如 `https:xxx.com/api/student/list`
* 使用小写字母。
* 单词分隔用`-`。

## 请求方法
* 不改变数据的接口用 GET。如: 获取列表接口，详情接口。
* 改变数据的接口用 POST。如: 新增接口，编辑接口，删除接口。

说明: 如果严格的按照HTTP方法的语义，新增接口应该用 PUT，删除接口应该用 DELETE。我们团队认为新增，删除接口均用 POST，易于记忆。这个细节，对整体的代码质量也没有影响。

## 请求参数
* POST 的数据都会放在body里。用 `x-www-form-urlencoded` 格式。
* token 放请求头中的 Authorization 字段。Authorization值的格式: `Bearer token值`。
* 接口版本请求头中的 Version 字段。

## 响应
返回`json`类型数据。如
```json
{
  "errorCode": 0,
  "errorMsg": "",
  "data": {}// 或 []
}
```

说明: 
* errorCode: 错误码。没有报错，errorCode 为 0。
* errorMsg: 错误信息。没有报错，不返回 errorMsg 字段。
* data: 主体内容。对于列表接口，data 是数组类型的。

## 列表接口
### url
以 `list` 结尾。 如: `/api/goods/list`。

### 请求方法
GET。

### 请求参数
#### 筛选条件
筛选条件: where。where 的值是 `encodeURIComponent(JSON.stringify({列名1: 值, 列名2: 值, ...}))`。如: 筛选年龄(age)为20的学生，url 是 `/api/student/list?where=%7B%22age%22%3A20%7D`。

列的筛选的规则：
* 精确搜索: `列名`。
* 模糊搜索: `列名__like`。
* 大于: `列名__gt`。 常见对数字类型和日期类型的列筛选。
* 大于等于: `列名__gte`。
* 小于: `列名__lt`。
* 小于等于: `列名__lte`。

#### 分页信息
* 页数: pageAt。
* 每页的数量: pageLimit。

如: `/api/student/list?pageAt=2&pageLimit=10`。

如果不传分页参数，默认返回第一页的10条数据。

#### 排序信息
排序信息: order。order的值为: `encodeURIComponent(JSON.stringify([{列名1: "asc(升序) 或 desc(降序)"}]))`。

支持多个排序值。

### 响应
```json
{
  "errorCode": 0,
  "errorMsg": "",
  "data": [],
  "pager": {
    "pageAt": 1,// 当前页
    "total": 21// 总条数
  }
}
```

## 详情接口
### url
以 `detail/:id` 结尾。 如: `/api/goods/detail/3`。

### 请求方法
GET。

### 响应
```json
{
  "errorCode": 0,
  "errorMsg": "",
  "data": {
    "id": 1,
    // 更多字段
  }
}
```

## 新增接口
### url
以 `add` 结尾。 如: `/api/goods/add`。

### 请求方法
POST。

### 响应
```json
{
  "errorCode": 0,
  "errorMsg": "",
  "data": {
    "id": 1,
  }
}
```

data中的id为新增成功的数据的id。

## 编辑接口
### url
以 `edit/:id` 结尾。如: `/api/goods/edit/3`。

### 请求方法
POST。

### 响应
```json
{
  "errorCode": 0,
  "errorMsg": "",
  "data": {}
}
```

## 删除接口
### url
以 `del/:id` 结尾。如:  `/api/goods/del/3`。

### 请求方法
POST。

### 响应
```json
{
  "errorCode": 0,
  "errorMsg": "",
  "data": {}
}
```

## 审核接口
### url
以 `audit/:id` 结尾。如:  `/api/goods/audit/3`。

### 请求方法
POST。

### 响应
```json
{
  "errorCode": 0,
  "errorMsg": "",
  "data": {}
}
```

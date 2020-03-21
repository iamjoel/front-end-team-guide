# 接口规范文档
## 接口地址
* 接口地址以 api 开头。
* 列表接口地址以 `list` 结尾。 如： `/api/goods/list`
* 详情接口以实体的 `detail/:id` 结尾。 如： `/api/goods/detail/3`
* 新增进口以 `add` 结尾。 如: `/api/goods/add`
* 编辑接口以 `edit/:id` 结尾。如： `/api/goods/edit/3`
* 删除接口以 `del/:id` 结尾。如： `/api/goods/del/3`

## 请求方法
不改变数据的接口用 HTTP 的 GET，其他用 HTTP 的 POST。
POST 的数据都会放在body里用 x-www-form-urlencoded  格式。

## 请求参数
筛选条件会在 url 的 where 参数里，where 的值是 encodeURIComponent(JSON.stringify(筛选条件对象)) 的值。如：筛选年龄(age)为20的学生，url 是 `/api/student/list?where=%7B%22age%22%3A20%7D` 。

要第几页数据，会在url 的 pageAt 参数里。一页多少调，会在url 的 pageLimit 参数里。 如: `/api/student/list?pageAt=2&pageLimit=10`

## 响应
用返回 json。形如
```
{
  errorCode: 0,
  errorMsg: ''
  data: {...},
}
```

data 放主体数据，
* 对于列表接口，data 是数组类型的。
* 对于新增接口，data 中要包含新增成功的实体的id。

如果没有报错，errorCode 返回 0。 errorMsg 给错误信息。

如果是列表接口，分页信息放在 pager 对象里，如： 
```
{
  errorCode: 0,
  errorMsg: ''
  data: [...],
  pager: {
    pageAt: 1, // 当前页
    total: 21 // 总条数
  }
}
```

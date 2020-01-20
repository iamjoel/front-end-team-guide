import fetchUserInfo from './async-fn'

test('应该能获取到用户数据', async () => {
  var userData = await fetchUserInfo()
  expect(typeof(userData) === 'object').toBeTruthy()
  expect(userData.name != undefined).toBeTruthy()
})

test('应该能让获取用户报错', async () => {
  try {
    var userData = await fetchUserInfo(true)
  } catch(e) {
    expect(e).toEqual('fail')
  }
})
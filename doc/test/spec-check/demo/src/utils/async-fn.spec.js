import fetchUserInfo from './async-fn'
import assert from 'assert'

test('应该能获取到用户数据', async () => {
  var userData = await fetchUserInfo()
  assert.strictEqual(typeof(userData), 'object')
  assert.notEqual(userData.name, undefined)
})

test('应该能让获取用户报错', async () => {
  try {
    var userData = await fetchUserInfo(true)
  } catch(e) {
    assert.strictEqual(e, 'fail')
  }
})
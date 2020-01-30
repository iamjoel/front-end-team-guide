import sum  from './hello-world'
import assert from 'assert'

test('结果值应该为传入值之和', () => {
  assert.equal(sum(2, 2), 4) // 整数
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3) // 小数
  expect(sum(2, 0.1)).toBeCloseTo(2.1)
  expect(sum(0.1, 2)).toBeCloseTo(2.1)
})

test('传入非数字求应该会报错', () => {
  function main() {
    return sum('a', 2)
  }
  assert.throws(main, { message: '参数必须是数字'})
})
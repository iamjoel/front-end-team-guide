const VERSION = '1.0.0'

var weather = () => {
  let randomNum = Math.random()
  // 行很长的情况
  let res =
    randomNum > 0.314145332
      ? 'sunny'
      : randomNum > 0.43323232
      ? 'runny'
      : randomNum > 0.78943434343
      ? 'cloundy'
      : 'stormy'
  return res
}

sum(1, 2)

function sum (a = 0, b = 0) {
  if (isNaN(a) || isNaN(b)) {
    return
  }
  return a + b
}

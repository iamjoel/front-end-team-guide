function sum(a, b) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number') {
    throw Error('参数必须是数字')
  }
  return a + b
}

export default sum
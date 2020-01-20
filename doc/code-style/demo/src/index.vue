<template>
  <div
    class="card"
    data-id="1"
    data-foo="foo"
    data-bar="bar"
    data-baz="baz"
    data-ttt="ttt"
    data-jjj="jjj"
    data-ooo="ooo"
  >
    <div class="card__title">title</div>
    <div class="card__body">content</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      foo: null,
      bar: 'xxx'
    }
  },
  methods: {
    fooFn () {
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
  }
}
</script>
<style scoped></style>

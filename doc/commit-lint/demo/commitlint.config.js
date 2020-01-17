module.exports = {
  extends: ['@commitlint/config-conventional'],
  /**
   * rule 由 name 和配置数组组成，如：'name: [0, 'always', 72]'
   * 数组中第一位为 level, 可选0, 1, 2; 0为disable, 1为warning, 2为error
   * 第二位为应用与否, 可选 always | never
   * 第三位为 rule 的值
   */
  rules: {
    'type-enum': [2, 'always', [
      'feature', 'fix', 'perf', 'ver', 'doc', 'test'
    ]],
  }
}
module.exports = {
  stories: ['../doc/**/*.stories.(js)'],
  addons: [
    '@storybook/addon-actions', // 查看事件的输出
    '@storybook/addon-knobs/register', // 动态改传入的组件参数
    '@storybook/addon-notes/register', // 放一些备注
    '@storybook/addon-docs', // 将stroies 生成 doc，也支持用 MDX 自己写。https://github.com/storybookjs/storybook/blob/master/addons/docs/README.md#installation
    '@storybook/addon-storysource', // 示例与源码的对应
    '@storybook/addon-cssresources/register', // CSS 源码
    '@storybook/addon-viewport/register', // 模拟各种设备
    '@storybook/addon-backgrounds/register' // 改背景色
  ]
}
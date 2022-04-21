/*
 * @Author: Harry
 * @Date: 2021-12-26 15:16:20
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-03-05 13:36:37
 * @FilePath: \vant-u\babel.config.js
 */
const proPlugins = []
// 如果是生产环境，则使用去掉console的插件
if (process.env.NODE_ENV === 'pro') {
  proPlugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: (name) => `${name}/style/less`
      },
      'vant'
    ],
    ...proPlugins
  ]
}

/***
 * @Description:
 * @Author: Harry
 * @Date: 2021-10-19 22:49:09
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-10-19 22:49:10
 * @LastEditors: Harry
 */
const path = require('path')
module.exports = {
  // ...
  publicPath: './', // 文件加载设置为相对路径
  outputDir: 'dist',
  // lintOnSave: false, // 关闭eslint
  // productionGzip: process.env.NODE_ENV === 'pro', //  开启gzip压缩代码
  productionSourceMap: process.env.NODE_ENV === 'pro', // 生产环境下css 分离文件
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },
  // vue.config.js
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'vue2+element+sass'
        return args
      })
  }
  // ...
}

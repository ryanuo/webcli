/*
 * @Author: Harry
 * @Date: 2022-04-21 10:27:45
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-04-21 11:42:05
 * @FilePath: \webcli\vue.config.js
 */
/*
 * @Author: Harry
 * @Date: 2021-12-26 15:38:35
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-03-30 13:13:26
 * @FilePath: \vant-u\vue.config.js
 */
// vue.config.js
const path = require('path')
// 定制主题
const webpack = require('webpack')
const themePath = path.join(__dirname, './src/assets/css/themevars.less')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
  publicPath: './', // 文件加载设置为相对路径
  outputDir: 'dist',
  productionSourceMap: process.env.NODE_ENV !== 'pro',
  // lintOnSave: false, // 关闭eslint
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false // 不删除源文件
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'vue3+vant3+less'
        return args
      })
    if (process.env.NODE_ENV === 'pro') {
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
    }
  },
  devServer: {
    open: false, // 项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
    proxy: {
      '/v1': {
        target: 'http://127.0.0.1:5051/', // 对应自己的接口，代理地址修改后必须重启项目
        changeOrigin: true, // 是否允许跨域
        pathRewrite: {
          '^/v1': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          // 'text-color': '#111',
          // 'border-color': '#eee',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`
        }
      }
    }
  }
}

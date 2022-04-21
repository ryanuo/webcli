<!--

 * @Author: Harry
 * @Date: 2022-04-20 20:37:06
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-04-21 11:13:18
 * @FilePath: \webcli\README.md
   -->

# webcli

- 常用的vue2/3脚手架,公共配置，无需再次配置
- 使用git命令将所需的vue初始化cli拉取指定分支

# 仓库分支介绍

1. vue2+element-ui+sass
   `git命令` `node版本 14.18.3`

```git
git clone -b v2-el-sass https://github.com/Rr210/webcli.git
```

2. vue2+elment-ui+less

```git
git clone -b v2-el-less https://github.com/Rr210/webcli.git
```

3. vue2+vant2+less
```git
git clone -b v2-vt2-less https://github.com/Rr210/webcli.git
```

4. vue2+vant2+sass

```git
git clone -b v2-vt2-sass https://github.com/Rr210/webcli.git
```

5. vue2+echart+less

```git
git clone -b v2-ect-less https://github.com/Rr210/webcli.git
```

6. vue3+element-plus+less

```git
git clone -b v3-elp-less https://github.com/Rr210/webcli.git
```

7. vue3+element-plus+sass

```git
git clone -b v3-elp-sass https://github.com/Rr210/webcli.git
```

8. vue3+vite+element-plus+less

```git
git clone -b v3-v-elp-less https://github.com/Rr210/webcli.git
```
9. vue3+vite+element-plus+less+typescript

```git
git clone -b v3-v-elp-less+tjs https://github.com/Rr210/webcli.git
```

10. vue3+vant3+less

```git
git clone -b v3-vt3-less https://github.com/Rr210/webcli.git
```

11. vue3+vite+vant3+less

```git
git clone -b v3-v-vt3-less https://github.com/Rr210/webcli.git
```
# 常用的npm包

| npm名称          | 地址                                                                                                             | npm名称           | 地址                                                                                                                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vue富文本        | [vue-quill-editor](https://github.surmon.me/vue-quill-editor)                                                    | 海报截图工具      | [html2canvas](https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-getStart.html)                                                                                            |
| sass全局变量使用 | [sass-resources-loader](https://www.npmjs.com/package/sass-resources-loader)                                     | 轮播图工具        | [swiper](https://swiperjs.com/vue)                                                                                                                                                             |
| 常用的动画效果   | [animate](https://animate.style/) [css3动画](https://www.webhek.com/post/css3-animation-sniplet-collection.html) | 处理移动端rem适配 | [amfe-flexible，postcss-pxtorem](http://vuepress.wmm66.com/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/other/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D%E6%96%B9%E6%A1%88.html#%E7%AE%80%E4%BB%8B) |
| github部署项目   | [gh-pages](https://www.npmjs.com/package/gh-pages)                                                               | 上传图片压缩      | [compressorjs](https://www.npmjs.com/package/compressorjs)                                                                                                                                     |
| 移动端滑动问题   | [better-scroll](https://better-scroll.github.io/docs/zh-CN/guide/)                                               |

# 常用的性能优化

1. 首页白屏优化[查看](http://vuepress.wmm66.com/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/vue/vue%E9%A6%96%E9%A1%B5%E7%99%BD%E5%B1%8F%E4%BC%98%E5%8C%96.html#%E5%BC%80%E5%90%AF%E8%B7%AF%E7%94%B1%E6%87%92%E5%8A%A0%E8%BD%BD)
# node和node-sass版本关系
<details>
<summary>node-sass and sass-loader 点击展开</summary>

- 使用`node -v` 查看自己的sass版本

| NodeJS  | Supported node-sass version | Node Module |
| ------- | --------------------------- | ----------- |
| Node 17 | 7.0+                        | 102         |
| Node 16 | 6.0+                        | 93          |
| Node 15 | 5.0+, <7.                   | 88          |
| Node 14 | 4.14+                       | 83          |
| Node 13 | 4.13+, <5                   | 79          |
| Node 12 | 4.12+                       | 72          |
| Node 11 | 4.10+, <5                   | 67          |
| Node 10 | 4.9+, <6.                   | 64          |
| Node 8  | 4.5.3+, <5.0                | 57          |
| Node <8 | <5.0                        | <57         |

## node-sass 和 sass-loader版本

```
sass-loader 4.1.1，node-sass 4.3.0
sass-loader 7.0.3，node-sass 4.7.2
sass-loader 7.3.1，node-sass 4.7.2
sass-loader 7.3.1，node-sass 4.14.1
sass-loader 8.0.2，node-sass 4.12.0
sass-loader 10.2.0，node-sass 6.0.1
```

- 最新查看原地址【[node-sass](https://github.com/sass/node-sass/)】
</details>

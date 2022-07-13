## 学习 webpack 的一个实战项目笔记

### 1.webpack 是什么以及为什么需要 webpack

- webpack 是一个打包工具，用于压缩、混淆代码，通过安装一系列的依赖包，解决代码的翻译、编译、转换工作；
- webpack 是一个前端工程化、自动化的方案；
- webpack 提供了一个开发过程中实时的编译输出和开发环境

### 2.如何实现我们所期待的 webpack 的功能

1. 安装 webpack 三大件
   - webpack
   - webpack-cli
   - webpack-dev-server
2. 处理 JS, 处理浏览器无法识别的 ES6 ES7 装饰器 async/await 等等(babel 六件套)
   - ES6
     - babel-loader@7
     - babel-core
     - babel-preset-env
   - ES6+
     - babel-plugin-transform-runtime
     - babel-plugin-transform-decorators
     - babel-plugin-transform-decorators-legacy
3. 处理 scss -> css -> 兼容性前缀 -> style
   - sass-loader
   - node-sass(推荐使用 dart-sass + sass)
   - css-loader
   - postcss-loader
   - autoprefixer
   - style-loader
4. 处理模板
   - ejs-loader
5. 处理 HTML (压缩，引用 js)
   - html-webpack-plugin
6. 处理 静态文件资源
   - file-loader
   - url-loader

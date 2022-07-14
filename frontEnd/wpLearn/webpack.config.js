const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
    mode: 'development', // 打包模式 development production
    entry: {
        index: resolve(__dirname, './src/js/index.js')
    }, // 入口文件，多入口则为一个对象 {index:resolve(__dirname, './src/js/index')}
    output: {
        path: resolve(__dirname + '/dist'), // 打包好之后输出文件的地址, 由于这里需要找的是一个文件夹, 所以resolve方法内要使用 + 号拼接路径
        filename: 'js/[name].js', // 打包好之后输出文件的名称
    },
    module: { // 配置模块
        rules: [ // 为不同的文件配置不同的loader            
            { // 处理js
                test: /\.js$/, // .js结尾的所有文件
                loader: 'babel-loader', // 只有一个loader 则使用 loader: 'xxx'的形式
                exclude: resolve(__dirname, 'node_modules') // 排除掉node_modules里面的所有文件
            },
            { // 处理css
                test: /\.css$/, // .css结尾的所有文件
                use: [ // 有多个loader 则使用 use: [ xxx ]  的形式, 使用多个loader的时候, 执行的顺序是倒序, 所以需要注意 loader 的执行顺序
                    'style-loader', 'css-loader'
                ],
            },
            { // 处理scss
                test: /\.scss$/, // .scss结尾的所有文件
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            { // 处理模板文件
                test: /\.tpl$/, // .tpl结尾的所有文件
                loader: 'ejs-loader'
            }
        ]
    },
    plugins: [ // 实例化的插件对象
        new HtmlWebpackPlugin({
            filename: 'index.html', // 打包后的文件名称
            template: resolve(__dirname, './src/index.html'), // 打包的目标文件
            chunks: ['index'], // 需要引入的js入口文件名
            excludeChunks: ['node_modules'] // 也需要排除node_modules
        }) // 实例化插件对象，并传入option设置
    ],
    devServer: {
        open: true,
        host: 'localhost',
        port: '3000'
    }
}
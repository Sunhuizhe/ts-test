const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',    // 入口文件
    output: {
        filename: 'app.js'      // 输出文件名，输出目录默认dist
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']      // 指定扩展名
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,   // 以ts或tsx为后缀的文件
                use: [{
                    loader: 'ts-loader'     // 使用ts-loader插件
                }],
                exclude: /node_modules/     // 排除node_modules下的文件
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ]
}

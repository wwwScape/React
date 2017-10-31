/*
 * webpack2.0 配置文件
*/
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");// 生成html
const ExtractTextPlugin = require("extract-text-webpack-plugin");// 抽离css

module.exports = {
    // 入口
    entry:"./src/scripts/app.js",

    // 出口
    output:{
        path:__dirname+"/build",
        filename:"bundle_[hash].js"
    },

    // loader
    module:{
        rules:[
            // babel
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    "react-hot-loader",
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["es2015","react"]
                        }
                    }
                ]
            },

            // css 分离
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",// 反馈
                    use:"css-loader" // 用sass-loader编译,用css-loader转换
                })
            },

            // sass编译成css 分离
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",// 反馈
                    use:"css-loader!sass-loader"
                })
            }
        ]
    },

    // 启动服务，全局安装webpack-dev-server
    devServer:{
        contentBase:__dirname+"/build",
        port:8200
    },

    // 插件
    plugins:[
        new HtmlWebpackPlugin({ // 生成html模板
            title:"myReact",
            filename:"app.html",
            template:"./index.ejs"
        }),
        new ExtractTextPlugin({ // css分离
            filename:'app.css',
            allChunks:true,
            disable:false
        }),
        // new webpack.optimize.UglifyJsPlugin({ // 压缩js
        //     compress: {
        //         warnings: false,// 不显示警告
        //     },
        //     output:{
        //         comments:false //删除注释
        //     }
        // })
    ]

}
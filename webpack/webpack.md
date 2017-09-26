## [Webpack](http://www.css88.com/doc/webpack/)

[什么是webpack](./img/what-is-webpack.png)

什么是webpack：模块打包工具，能够将css，js，img等打包成一个js文件
 
1. 模块化，项目完成后帮助我们实现模块化
2. 自定义文件（css,js等）或npm install
3. 静态文件模块化（比如css，需要借助插件和加载器）
4. 借助于插件和加载器 ，通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。

优势:

1. 代码分离：每个文件的模块化，高内聚低耦合
2. 装载器（css,js,sass,less,jsx等）:将当前文件模块化，如css-loader
3. 智能分析（require（"./template"+names+".ejs"））

装载器的案例：

1. css/style
2. sass/less
3. jsx
4. babel:babel-loader,babel-presets,将es6的语法转换成es5
5. 等等


版本：webpack1.x
	 webpack2.X


webpack.config.js文件：

	// 这是commonjs的语法，也是基于nodejs的
	module.exports = {
		/...参数配置.../
	}

参数entry：string，array，object

（1）如果是string，array时，输出文件是一个，output的配置--filename："bundle.js"，此时打包成的文件是bundle.js，
	
	(1) 如果使用filename："[name].js"，会生成main.js
	(2) 也可以配置为：filename："bundle_[chunkhash].js"

（2）如果是object，output的配置--filename："[name].js",此时打包成的文件是object内的名称为key的js文件

（3）版本号的问题：解决浏览器的缓存问题，只要文件不更改，版本号就不更改，根据文件内容更改版本号

	output的配置--filename："[name]_[hash].js"：会给每个js文件后面加上 _hash 后缀，问题是，每个js的后缀都一样，而且，在文件引入的时候也存在问题

	output的配置--filename："[name]_[chunkhash].js"：同样会给每个js文件后面加上不同版本号，而且，当文件改变时，重新打包，会再次生成新的文件，同时老的版本不会

	删除，当文件没有改动的时候，是不会重新生成版本号的

(4) 安装插件：html-webpack-plugin ，npm i html-webpack-plugin -D

	var HtmlWebpackPlugin = require("html-webpack-plugin");
	module.exports = {

		....

		// 配置插件
		plugins：[
			new HtmlWebpackPlugin()  //不传任何的参数
		]
	}

	此时，webpack打包，生成的简单的index.html文件会出现在output的path路径中，同时，index.html文件会自动的引入js文件，

	
	module.exports = {

		....

		// 配置插件，传参数
		plugins：[
			new HtmlWebpackPlugin({
				title："webpack2017"
			})
		]
	}
	
































































## nodejs相关的内容：

1. 使用require()来引入模块
2. __dirname，属于全局变量， 表示当前执行脚本所在的目录。
3. path模块：提供了一些用于处理文件路径的小工具
4. path.resolve([from ...], to)将 to 参数解析为绝对路径。

## npm

在package.json文件中，在scripts的字段下，可以自定义命令，

如："build":"webpack-dev-server --hot --inline",
这时，如果想运行webpack-dev-server --hot --inline这条命令，在命令行中写：npm run build;

或者，使用"start":"webpack-dev-server --hot --inline",这时在命令行中写：npm start；


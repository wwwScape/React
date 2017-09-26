## [Webpack](http://www.css88.com/doc/webpack/)

![什么是webpack](./img/what-is-webpack.png)

什么是webpack：模块打包工具
 
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















## nodejs相关的内容：

1. 使用require()来引入模块
2. __dirname，属于全局变量， 表示当前执行脚本所在的目录。
3. path模块：提供了一些用于处理文件路径的小工具
4. path.resolve([from ...], to)将 to 参数解析为绝对路径。
## React

### 使用webpack2.0搭建开发环境

1. 安装相应的依赖

		  "devDependencies": {
		    "babel-core": "^6.26.0",
		    "babel-loader": "^7.1.2",
		    "babel-preset-es2015": "^6.24.1",
		    "babel-preset-react": "^6.24.1",
		    "css-loader": "^0.28.7",
		    "extract-text-webpack-plugin": "^2.1.2",
		    "html-webpack-plugin": "^2.30.1",
		    "node-sass": "^4.5.3",
		    "react": "^16.0.0",
		    "react-dom": "^16.0.0",
		    "react-hot-loader": "^1.3.1",
		    "sass-loader": "^6.0.6",
		    "style-loader": "^0.18.2",
		    "webpack": "^3.6.0"
		  }

2. 配置webpack.config.js

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
		        new webpack.optimize.UglifyJsPlugin({ // 压缩js
		            compress: {
		                warnings: false,// 不显示警告
		            },
		            output:{
		                comments:false //删除注释
		            }
		        })
		    ]
		
		}


3. 配置webpack遇到的坑

	（1）extract-text-webpack-plugin：版本不能使用3.x的，启动webpack-dev-server时，会报module找不到的错误

	（2）webpack-dev-server要全局安装，启动时不要带有--hot --line，会报错，可能与react-hot-loader有关

	（3）使用sass-loader，必须要先安装node-sass，使用cnpm来安装，npm装不上


### React

由于操作DOM功耗太大，于是react使用了虚拟DOM来解决这一问题

适用于中大型项目，小项目使用vue即可，原因是用 MVVM 开发大型项目时，M与V可能会‘耦合’,比较难找到问题的所在，但是react就比较清晰

（提高性能的）虚拟DOM:

组件化的开发思想：一切皆组件（提高开发效率的组件化开发）

组件化的

## yo

[官网](http://yo.doyoe.com/doc/getting-started.html)

## sass 

[sass](http://www.imooc.com/code/5993)

### SASS 和SCSS的区别

1. 文件的后缀名不一样，**.sass 和 .scss**
2. sass使用严格的 **缩进式** 写法，没有分号和大括号，SCSS 的语法书写和我们的 CSS 语法书写方式非常类似

		body
		  color: #fff
		  background: #f36
3. SCSS 是 Sass 的新语法格式，从外形上来判断他和 CSS 长得几乎是一模一样，代码都包裹在一对大括号里，并且末尾结束处都有一个分号。其文件名格式常常以“.scss”为扩展名。
4. “.sass”只能使用 Sass 老语法规则（缩进规则），“.scss”使用的是 Sass 的新语法规则，也就是 SCSS 语法规则（类似 CSS 语法格式）。

### scss的编译方式

1. 命令编译

2. GUI工具编译

3. 自动化编译

###### 命令行编译

1. 单文件编译：sass <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css

2. 多文件编译：sass sass/:css/

3. 缺点及解决方法：sass --watch <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css，

	比如：sass --watch sass/bootstrap.scss:css/bootstrap.css

###### GUI 界面工具编译

1. Koala (http://koala-app.com/)（推荐）
2. Compass.app（http://compass.kkbox.com/）
3. Scout（http://mhs.github.io/scout-app/）
4. CodeKit（https://incident57.com/codekit/index.html）（推荐）
5. Prepros（https://prepros.io/）

###### 自动化编译

1. Grunt

		module.exports = function(grunt) {
		    grunt.initConfig({
		        pkg: grunt.file.readJSON('package.json'),
		        sass: {
		            dist: {
		                files: {
		                    'style/style.css' : 'sass/style.scss'
		                }
		            }
		        },
		        watch: {
		            css: {
		                files: '**/*.scss',
		                tasks: ['sass']
		            }
		        }
		    });
		    grunt.loadNpmTasks('grunt-contrib-sass');
		    grunt.loadNpmTasks('grunt-contrib-watch');
		    grunt.registerTask('default',['watch']);
		}

2. Gulp

		var gulp = require('gulp');
		var sass = require('gulp-sass');
		
		gulp.task('sass', function () {
		    gulp.src('./scss/*.scss')
		        .pipe(sass())
		        .pipe(gulp.dest('./css'));
		});
		
		gulp.task('watch', function() {
		    gulp.watch('scss/*.scss', ['sass']);
		});

		gulp.task('default', ['sass','watch']);

3. webpack2.0 

sass npm i css-loarder sass-loader node-sass -D

		/*
		 * webpack2.0 配置文件
		*/
		const webpack = require("webpack");
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
		    ]
		
		}

### 不同样式风格的输出方法

	index.scss 文件
	
	nav {
	  ul {
	    margin: 0;
	    padding: 0;
	    list-style: none;
	  }
	
	  li { display: inline-block; }
	
	  a {
	    display: block;
	    padding: 6px 12px;
	    text-decoration: none;
	  }
	}

1. 嵌套输出方式 nested

	sass --watch test.scss:test.css --style nested

		nav ul {
		  margin: 0;
		  padding: 0;
		  list-style: none; }
		nav li {
		  display: inline-block; }
		nav a {
		  display: block;
		  padding: 6px 12px;
		  text-decoration: none; }
 
2. 展开输出方式 expanded  

	sass --watch test.scss:test.css --style expanded

		nav ul {
		  margin: 0;
		  padding: 0;
		  list-style: none;
		}
		nav li {
		  display: inline-block;
		}
		nav a {
		  display: block;
		  padding: 6px 12px;
		  text-decoration: none;
		}
 
3. 紧凑输出方式 compact 

	sass --watch test.scss:test.css --style compact
		
		nav ul { margin: 0; padding: 0; list-style: none; }
		nav li { display: inline-block; }
		nav a { display: block; padding: 6px 12px; text-decoration: none; }

4. 压缩输出方式 compressed

	sass --watch test.scss:test.css --style compressed
		
		nav ul{margin:0;padding:0;list-style:none}nav li{display:inline-block}nav a{display:block;padding:6px 12px;text-decoration:none}

### sass的基础特性

###### 声明变量

使用$来声明变量

	$bg-color:red;
	$width:900px;
	body{
		background:$bg-color;
		width:$width;
	}

###### 普通变量与默认变量

sass 的默认变量仅需要在值后面加上 !default 即可。
	
	$baseLineHeight:1.5 !default;
	body{
	    line-height: $baseLineHeight; 
	}

sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可。

	$baseLineHeight: 2;
	$baseLineHeight: 1.5 !default;
	body{
	    line-height: $baseLineHeight; 
	}

###### 局部变量和全局变量

	//SCSS
	$color: orange !default;//定义全局变量
	.block {
	  color: $color;//调用全局变量
	}
	em {
	  $color: red;//定义局部变量（全局变量 $color 的影子）
	  a {
	    color: $color;//调用局部变量
	  }
	}

### Sass 的嵌套

1. 选择器嵌套

2. 属性嵌套

		.box {
		  border: {
		   top: 1px solid red;
		   bottom: 1px solid green;
		  }
		}
		
		生成：

		.box {
		    border-top: 1px solid red;
		    border-bottom: 1px solid green;
		}

3. 伪类嵌套

	其实伪类嵌套和属性嵌套非常类似，只不过他需要借助\`&`符号一起配合使用

		.clearfix{
		&:before,
		&:after {
		    content:"";
		    display: table;
		  }
		&:after {
		    clear:both;
		    overflow: hidden;
		  }
		}

避免选择器嵌套：

* 选择器嵌套最大的问题是将使最终的代码难以阅读。开发者需要花费巨大精力计算不同缩进级别下的选择器具体的表现效果。
* 选择器越具体则声明语句越冗长，而且对最近选择器的引用(&)也越频繁。在某些时候，出现混淆选择器路径和探索下一级选择器的错误率很高，这非常不值得。

### 混合宏

但当你的样式变得越来越复杂，需要重复使用大段的样式时，使用变量就无法达到我们目了。这个时候 Sass 中的混合宏就会变得非常有意义

###### 声明混合宏 -- @mixin

在 Sass 中，使用 “@mixin” 来声明一个混合宏
	
不带参数的：

	@mixin border-radius{
	    -webkit-border-radius: 5px;
	    border-radius: 5px;
	}

带参数的：

	@mixin border-radius($radius:5px){
	    -webkit-border-radius: $radius;
	    border-radius: $radius;
	}

复杂的混合宏：
	
	@mixin box-shadow($shadow...) {
	  @if length($shadow) >= 1 {
	    @include prefixer(box-shadow, $shadow);
	  } @else{
	    $shadow:0 0 4px rgba(0,0,0,.3);
	    @include prefixer(box-shadow, $shadow);
	  }
	}

###### 调用混合宏 -- @include

	@mixin border-radius{
	    -webkit-border-radius: 3px;
	    border-radius: 3px;
	}
	
	button {
	    @include border-radius;
	}

###### 混合宏的参数

1. 传一个不带值的参数

		@mixin border-radius($radius){
		  -webkit-border-radius: $radius;
		  border-radius: $radius;
		} 

		.box {
		  @include border-radius(3px);
		}

2. 传一个不带值的参数

	可以给混合宏的参数传一个默认值

		@mixin border-radius($radius:3px){
		  -webkit-border-radius: $radius;
		  border-radius: $radius;
		}

		.btn {
		  @include border-radius;
		}

3. 传多个参数

		@mixin center($width,$height){
		  width: $width;
		  height: $height;
		  position: absolute;
		  top: 50%;
		  left: 50%;
		  margin-top: -($height) / 2;
		  margin-left: -($width) / 2;
		}
		
		.box-center {
		  @include center(500px,300px);
		}

	  有一个特别的参数“…”。当混合宏传的参数过多之时，可以使用参数来替代，

		@mixin box-shadow($shadows...){
		  @if length($shadows) >= 1 {
		    -webkit-box-shadow: $shadows;
		    box-shadow: $shadows;
		  } @else {
		    $shadows: 0 0 2px rgba(#000,.25);
		    -webkit-box-shadow: $shadow;
		    box-shadow: $shadow;
		  }
		}
		
		.box {
		  @include box-shadow(0 0 1px rgba(#000,.5),0 0 2px rgba(#000,.2));
		}

####### 混合宏的不足

	@mixin border-radius{
	  -webkit-border-radius: 3px;
	  border-radius: 3px;
	}
	
	.box {
	  @include border-radius;
	  margin-bottom: 5px;
	}
	
	.btn {
	  @include border-radius;
	}

	生成：
	.box {
	  -webkit-border-radius: 3px;
	  border-radius: 3px;
	  margin-bottom: 5px;
	}
	
	.btn {
	  -webkit-border-radius: 3px;
	  border-radius: 3px;
	}


Sass 在调用相同的混合宏时，并不能智能的将相同的样式代码块合并在一起。这也是 Sass 的混合宏最不足之处。

### 扩展/继承 -- @extend

在 Sass 中是通过关键词 “@extend”来继承已存在的类样式块，从而实现代码的继承

	//SCSS
	.btn {
	  border: 1px solid #ccc;
	  padding: 6px 10px;
	  font-size: 14px;
	}
	
	.btn-primary {
	  background-color: #f36;
	  color: #fff;
	  @extend .btn;
	}
	
	.btn-second {
	  background-color: orange;
	  color: #fff;
	  @extend .btn;
	}

### 占位符 %placeholder

没有被 @extend 调用，他并没有产生任何代码块，只是静静的躺在你的某个 SCSS 文件中。只有通过 @extend 调用才会产生代码

	//SCSS
	%mt5 {
	  margin-top: 5px;
	}
	%pt5{
	  padding-top: 5px;
	}
	
	.btn {
	  @extend %mt5;
	  @extend %pt5;
	}
	
	.block {
	  @extend %mt5;
	
	  span {
	    @extend %pt5;
	  }
	}

### 混合宏 VS 继承 VS 占位符

混合宏：@min，不会自动合并相同的样式代码，造成代码的冗余

继承：@extend，继承公用的代码

占位符：%，定义，不使用@extend调用，不会编译

### 运算

###### 加法

加法运算是 Sass 中运算中的一种，在变量或属性中都可以做加法运算

	.box {
	  width: 20px + 8in;
	}

但对于携带不同类型的单位时，在 Sass 中计算会报错

###### 减法

Sass 的减法运算和加法运算类似
	
	$full-width: 960px;
	$sidebar-width: 200px;
	
	.content {
	  width: $full-width -  $sidebar-width;
	}

###### 乘法

如果进行乘法运算时，两个值单位相同时，只需要为一个数值提供单位即可

	.box {
	  width: 10px * 2;
	}

###### 除法

综合上述，”/  ”符号被当作除法运算符时有以下几种情况：

* 如果数值或它的任意部分是存储在一个变量中或是函数的返回值。
* 如果数值被圆括号包围。
* 如果数值是另一个数学表达式的一部分。

		//SCSS
		p {
		  font: 10px/8px;             // 纯 CSS，不是除法运算
		  $width: 1000px;
		  width: $width/2;            // 使用了变量，是除法运算
		  width: round(1.5)/2;        // 使用了函数，是除法运算
		  height: (500px/2);          // 使用了圆括号，是除法运算
		  margin-left: 5px + 8px/2px; // 使用了加（+）号，是除法运算
		}

###### 数字运算

	.box {
	  width: ((220px + 720px) - 11 * 20 ) / 12 ;  
	}

###### 颜色运算

所有算数运算都支持颜色值，并且是分段运算的。也就是说，红、绿和蓝各颜色分段单独进行运算。

	p {
	  color: #010203 + #040506;
	}

	计算公式为 01 + 04 = 05、02 + 05 = 07 和 03 + 06 = 09

	p {
	  color: #010203 * 2;
	}
	
	计算公式为 01 * 2 = 02、02 * 2 = 04 和 03 * 2 = 06

###### 字符运算

	$content: "Hello" + "" + "Sass!";
	.box:before {
	  content: " #{$content} ";
	}
	
	编译出来的CSS：
	
	.box:before {
	  content: " Hello Sass! ";
	}
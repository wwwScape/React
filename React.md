# [React](http://www.ruanyifeng.com/blog/2015/03/react.html)
[中文网](http://www.css88.com/react/)

## 介绍

- 用于构建用户界面的JAVASCRIPT库（A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES）
- React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。
- React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。
- 兼容性，IE9及IE9以上的主流浏览器

### 特点

1. 声明式设计 —— React采用声明式，可以轻松描述应用。

2. 高效 —— React通过对DOM的模拟（虚拟DOM），最大限度地减少与DOM的交互。(减少对DOM的操作)

3. 灵活 —— React可以与已知的库或框架很好地配合。

4. JSX —— JSX 是 JavaScript 语法的扩展（语法糖）。React 开发不一定使用 JSX ，但我们建议使用它。
 
5. 组件 —— 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。

6. 单向响应的数据流 —— React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

7. 创建单页应用（SPA） —— single page application

8. MVC，MVVM框架

9. web App -> native App

10. React 可以在浏览器运行，也可以在服务器运行
11. 组件化开发 —— 封装起来具备独立功能的ui控件，代码的复用


## 安装

		npm install -g create-react-app
		create-react-app my-app
		cd my-app
		npm start

## Chrome 和 Firefox 的 React Devtools extension
Chrome 和 Firefox 的 React Devtools extension 可让在浏览器的开发者工具中检查 React 组件树。允许检查任何组件树中的 props(属性) 和 state(状态) 

## 相关的js介绍
1. react.js 是 React 的核心库，
2. react-dom.js 是提供与 DOM 相关的功能，
	1. ReactDOM.render()
	2. ReactDOM.unmountComponentAtNode()
	3. ReactDOM.findDOMNode()
3. Browser.js 的作用是将 JSX 语法转为 JavaScript 语法，这一步很消耗时间，实际上线的时候，应该将它放到服务器完成。

## [JSX语法](http://www.css88.com/react/docs/introducing-jsx.html)

1. HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写

	    <script type="text/babel">
	      var names = ['Alice', 'Emily', 'Kate'];
	      ReactDOM.render(
	        <div>
	        {
	          names.map(function (name, index) {
	            return <div key={index}>Hello, {name}!</div>
	          })
	        }
	        </div>,
	        document.getElementById('example')
	      );
	    </script>

2. React 独有的 JSX 语法，跟 JavaScript 不兼容

		<script type="text/babel">
			
		</script>

3. JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析

4. JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员

		
		var arr = [
		  <h1>Hello world!</h1>,
		  <h2>React is awesome</h2>,
		];
		ReactDOM.render(
		  <div>{arr}</div>,
		  document.getElementById('example')
		);


## ReactDOM.render()

		ReactDOM.render(
		  element,
		  container,
		  [callback]
		)

说明：渲染一个 React 元素到由 container 提供的 DOM 中，并且返回组件的一个 引用(reference) （或者对于 无状态组件 返回 null ）。如果 React 元素先前已经被渲染到了 container 中，那么将对其执行更新，并且对 DOM 只修改需要修改的地方，以反映最新的 React元素。(使用DOM diffing 算法来进行有效的更新，React 只更新必需要更新的部分，React DOM 会将元素及其子元素与之前版本逐一对比, 并只对有必要更新的 DOM 进行更新, 以达到 DOM 所需的状态。)

ReactDOM.render() 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。

		ReactDOM.render(
		  <h1>Hello, world!</h1>,
		  document.getElementById('example')
		);
## ReactDOM.unmountComponentAtNode()

	ReactDOM.unmountComponentAtNode(container)	

从 DOM 中移除已装载的 React 组件，并清除其事件处理程序和 state 。 如果在容器中没有挂载组件，调用此函数什么也不做。 如果组件被卸载，则返回 true ，如果没有要卸载的组件，则返回 false 。

## ReactDOM.findDOMNode()

	ReactDOM.findDOMNode(component)

如果组件已经被装载到 DOM 中，这将返回相应的原生浏览器 DOM 元素。这个方法对读取 DOM 外的值是有用的，就像单字段值 以及 执行 DOM 分析（measurement） 。在大多数情况下，你可以绑定一个 ref 到 DOM 节点上，从而避免使用findDOMNode。 当 render 返回 null 或 false 时，findDOMNode 将会返回 null。

> 注意：
> 
>(1) findDOMNode 是一个用于访问真实 DOM 节点（underlying DOM node）的接口。 在大多数情况下，不建议使用它，因为它会越过组件抽象层访问真实 DOM 。
>
>(2) findDOMNode 仅适用于已装载的组件（即已放置在DOM中的组件）。 如果你试图在一个尚未安装的组件上调用它（就像在一个尚未创建的组件上调用 render()中的 findDOMNode() ），将抛出一个异常。
>
>(3) findDOMNode 不能用于函数式组件。

## 组件(Components)

从定义上来说， 组件就像JavaScript的函数。组件可以接收任意输入(称为"props")， 并返回 React 元素，用以描述屏幕显示内容。

组件分为：函数式组件（Functional）和类组件（React.createClass()）

	(1)最简单的函数式组件就是定义一个javascript函数：

	<script type="text/babel">
		function Welcome(props) {
		  return <h1>Hello, {props.name}</h1>;
		}
	</script>

	(2)用一个 ES6 的 class 来定义一个组件:

	<script type="text/babel">
		class Welcome extends React.Component {
		  render() {
		    return <h1>Hello, {this.props.name}</h1>;
		  }
		}
	</script>

	(3)React.createClass({对象}) 方法用于生成一个组件类:

	<script type="text/babel">
	  var HelloMessage = React.createClass({
	    render: function() {
	      return <h1>Hello {this.props.name}</h1>;
	    }
	  });
	
	  ReactDOM.render(
	    <HelloMessage name="John" />,
	    document.getElementById('example')
	  );
	</script>

> 说明
> 
> 1. 组件类只能包含一个顶层标签，也就是说return的模板最外层有且只能有一个html标签，否则会报错browser.min.js:39 Uncaught SyntaxError: embedded: Adjacent JSX elements must be wrapped in an enclosing tag 
> 
> 2. 变量 HelloMessage 就是一个组件类。模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例。所有组件类都必须有自己的 render 方法，用于输出组件。
> 
> 3. 组件的用法与原生的 HTML 标签完全一致，可以任意加入属性。比如 <HelloMessage name="John"> ，就是 HelloMessage 组件加入一个 
>    name 属性，值为 John。组件的属性可以在组件类的 this.props 对象上获取，比如 name 属性就可以通过 this.props.name
>    
> 4. 添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 
>    是 JavaScript 的保留字 


### 组件的渲染

当 React 遇到一个代表用户自定义组件的元素时，它将 JSX 属性以一个单独对象的形式传递给相应的组件。 我们将其称为 "props" 对象。

	function Welcome(props) {
	  return <h1>Hello, {props.name}</h1>;
	}
	
	const element = <Welcome name="Sara" />;
	ReactDOM.render(
	  element,
	  document.getElementById('root')
	);

> 说明：
>  
> 1. 我们调用了 ReactDOM.render() 方法并向其中传入了 <Welcome name="Sara" /> 元素。
> 
> 2. React 调用 Welcome 组件，并向其中传入了 {name: 'Sara'} 作为 props 对象。
> 
> 3. Welcome 组件返回 `<h1>Hello, Sara</h1>`。
> 
> 4. React DOM 迅速更新 DOM ，使其显示为 `<h1>Hello, Sara</h1>`。
> 
> 警告：
> 
> 组件名称总是以大写字母开始。
> 
> 举例来说, `<div />` 代表一个 DOM 标签，而 `<Welcome />` 则代表一个组件，并且需要在作用域中有一个 Welcome 组件。 

### 构成组件

组件可以在它们的输出中引用其它组件。这使得我们可以使用同样的组件来抽象到任意层级。一个按钮，一个表单，一个对话框，一个屏幕：在 React 应用中，所有这些都通常描述为组件。

例如，我们可以创建一个 App 组件，并在其内部多次渲染 Welcome：

	function Welcome(props) {
	  return <h1>Hello, {props.name}</h1>;
	}
	
	function App() {
	  return (
	    <div>
	      <Welcome name="Sara" />
	      <Welcome name="Cahal" />
	      <Welcome name="Edite" />
	    </div>
	  );
	}
	
	ReactDOM.render(
	  <App />,
	  document.getElementById('root')
	);

>警告：
>
> 组件必须返回一个单独的根元素。这就是为什么我们添加一个 `<div>` 来包含所有 `<Welcome />` 元素的原因。

### 提取组件
把一个组件分为多个更小的组件。

## props是只读的（Properties简写）

无论你用函数或类的方法来声明组件, 它都无法修改其自身 props;

所有 React 组件都必须是纯函数，并禁止修改其自身 props 。纯函数就是函数自己不会试图改变自己的输入

	纯函数：
	function sum(a, b) {
	  return a + b;
	}
	
	非纯函数：
	function withdraw(account, amount) {
	  account.total -= amount;
	}

当然， 应用 UI 总是动态的，并且随时有可能改变。 所以要介绍一个新的概念 state(状态) 。state 允许 React 组件在不违反上述规则的情况下, 根据用户操作, 网络响应, 或者其他随便什么东西, 来动态地改变其输出。

## [状态（state）和生命周期](http://www.css88.com/react/docs/state-and-lifecycle.html)

### 状态state

目前我们知道的更新ui的方法只有一种，调 ReactDOM.render() 方法来更新渲染的输出：

	function tick() {
	  const element = (
	    <div>
	      <h1>Hello, world!</h1>
	      <h2>It is {new Date().toLocaleTimeString()}.</h2>
	    </div>
	  );
	  ReactDOM.render(
	    element,
	    document.getElementById('root')
	  );
	}
	
	setInterval(tick, 1000);

现在提供一种更合理的方法：state，它完全由组件自身控制，是一种局部状态,state 和 props 类似，但是它是私有的，并且由组件本身完全控制。

### 把函数式组件转化为类组件

	定时器，函数：
	
	function tick() {
	  const element = (
	    <div>
	      <h1>Hello, world!</h1>
	      <h2>It is {new Date().toLocaleTimeString()}.</h2>
	    </div>
	  );
	  ReactDOM.render(
	    element,
	    document.getElementById('root')
	  );
	}
	
	setInterval(tick, 1000);

	定时器，函数组件：

	function Clock(props) {
	  return (
	    <div>
	      <h1>Hello, world!</h1>
	      <h2>It is {props.date.toLocaleTimeString()}.</h2>
	    </div>
	  );
	}
	
	function tick() {
	  ReactDOM.render(
	    <Clock date={new Date()} />,
	    document.getElementById('root')
	  );
	}
	
	setInterval(tick, 1000);



	定时器函数转化为类组件（还未添加state和生命周期钩子）：
	
	class Clock extends React.Component {
	  render() {
	    return (
	      <div>
	        <h1>Hello, world!</h1>
	        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
	      </div>
	    );
	  }
	}

> 转化的步骤：
> 
> 1. 创建一个继承自 React.Component 类的 ES6 class 同名类。
> 
> 2. 添加一个名为 render() 的空方法。
> 
> 3. 把原函数中的所有内容移至 render() 中。
> 
> 4. 在 render() 方法中使用 this.props 替代 props。
> 
> 5. 删除保留的空函数声明。
> 
>说明：
>
>类允许我们在其中添加本地状态(state)和生命周期钩子。 

### 在类组件中添加本地状态(state)

把date从属性(props) 改为 状态(state)分三步：

1) 替换 render() 方法中的 this.props.date 为 this.state.date

2）添加一个 类构造函数(class constructor) 初始化 this.state

3) 移除 <Clock /> 元素中的 date 属性
	
	结果：
	class Clock extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	  }
	
	  render() {
	    return (
	      <div>
	        <h1>Hello, world!</h1>
	        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
	      </div>
	    );
	  }
	}
	
	ReactDOM.render(
	  <Clock />,
	  document.getElementById('root')
	);

### 在类中添加生命周期方法

挂载：mounting（第一次渲染到DOM之后）

卸载：unmounting（DOM 被销毁时）

当组件挂载和卸载时，我们可以在组件类上声明特殊的方法，称之为生命周期钩子，如componentDidMount() {}，componentWillUnmount() {}；componentDidMount在组件输出被渲染到 DOM 之后运行，

使用 this.setState() 来来周期性地更新组件本地状态

	class Clock extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	  }
	
	  componentDidMount() {
	    this.timerID = setInterval(
	      () => this.tick(),
	      1000
	    );
	  }
	
	  componentWillUnmount() {
	    clearInterval(this.timerID);
	  }
	
	  tick() {
	    this.setState({
	      date: new Date()
	    });
	  }
	
	  render() {
	    return (
	      <div>
	        <h1>Hello, world!</h1>
	        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
	      </div>
	    );
	  }
	}
	
	ReactDOM.render(
	  <Clock />,
	  document.getElementById('root')
	);








## this.props.children
this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点  

    <script type="text/babel">
      var NotesList = React.createClass({
        render: function() {
          return (
            <ol>
              {
                React.Children.map(this.props.children, function (child) {
                  return <li>{child}</li>;
                })
              }
            </ol>
          );
        }
      });

      ReactDOM.render(
        <NotesList>
          <span>hello</span>
          <span>world</span>
        </NotesList>,
        document.getElementById('example')
      );
    </script>

> 说明
> 
> NoteList 组件有两个 span 子节点，它们都可以通过 this.props.children 读取。
> 
>问题：this.props.children 的值有三种可能：
>
> + 如果当前组件没有子节点，它就是 undefined ;
> + 如果有一个子节点，数据类型是 object ；
> + 如果有多个子节点，数据类型就是 array 
> 
>所以，处理 this.props.children 的时候要小心。
>
> 解决方案：
>
> React 提供一个工具方法 React.Children 来处理 this.props.children 。我们可以用 React.Children.map 来遍历子节点，而不用担心         
> this.props.children 的数据类型是 undefined 还是 object。

## PropTypes
组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求

    <script type="text/babel">

      var data = 123;

      var MyTitle = React.createClass({
        propTypes: {
          title: React.PropTypes.string.isRequired,
        },

        render: function() {
          return <h1> {this.props.title} </h1>;
        }
      });

      ReactDOM.render(
        <MyTitle title={data} />,
        document.getElementById('example')
      );

    </script>

> 说明
> 
> 上面的Mytitle组件有一个title属性。PropTypes 告诉 React，这个 title 属性是必须的，而且它的值必须是字符串
> 
> 而现在title是number类型，所以控制台报错：Warning: Failed propType: Invalid prop `title` of type `number` supplied to      `MyTitle`, expected `string`.


	 getDefaultProps() 方法可以用来设置组件属性的默认值。

	 var MyTitle = React.createClass({
	  getDefaultProps : function () {
	    return {
	      title : 'Hello World'
	    };
	  },
	
	  render: function() {
	     return <h1> {this.props.title} </h1>;
	   }
	});
	
	ReactDOM.render(
	  <MyTitle />,
	  document.body
	);

## 获取真实的DOM节点
组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 [DOM diff](https://calendar.perfplanet.com/2013/diff/) ，它可以极大提高网页的性能表现。
但是，有时需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性

    <script type="text/babel">
      var MyComponent = React.createClass({
        handleClick: function() {
          this.refs.myTextInput.focus();
        },
        render: function() {
          return (
            <div>
              <input type="text" ref="myTextInput" />
              <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
          );
        }
      });

      ReactDOM.render(
        <MyComponent />,
        document.getElementById('example')
      );
    </script>

> 说明
> 
>上面代码中，组件 MyComponent 的子节点有一个文本输入框，用于获取用户的输入。这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输
>入的。
>
>为了做到这一点，文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
>
> 需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。
> 
> 上面代码中，通过为组件指定 Click 事件的回调函数，确保了只有等到真实 DOM 发生 Click 事件之后，才会读取 this.refs.[refName] 属   
> 性。
> 
> React 组件支持很多事件，除了 Click 事件以外，还有 KeyDown 、Copy、Scroll 等

## this.state
组件免不了要与用户互动，React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI 

    <script type="text/babel">
      var LikeButton = React.createClass({
        getInitialState: function() {
          return {liked: false};
        },
        handleClick: function(event) {
          this.setState({liked: !this.state.liked});
        },
        render: function() {
          var text = this.state.liked ? 'like' : 'haven\'t liked';
          return (
            <p onClick={this.handleClick}>
              You {text} this. Click to toggle.
            </p>
          );
        }
      });

      ReactDOM.render(
        <LikeButton />,
        document.getElementById('example')
      );
    </script>

> 说明 
> 
> 上面代码是一个 LikeButton 组件，它的 getInitialState() 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。
> 
> 当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。
> 
> 由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。
> 
> 一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。

## 表单
用户在表单填入的内容，属于用户跟组件的互动，所以不能用 this.props

    <script type="text/babel">
      var Input = React.createClass({
        getInitialState: function() {
          return {value: 'Hello!'};
        },
        handleChange: function(event) {
          this.setState({value: event.target.value});
        },
        render: function () {
          var value = this.state.value;
          return (
            <div>
              <input type="text" value={value} onChange={this.handleChange} />
              <p>{value}</p>
            </div>
          );
        }
      });

      ReactDOM.render(<Input/>, document.getElementById('example'));
    </script>

> 说明 
> 
> 上面代码中，文本输入框的值，不能用 this.props.value 读取，而要定义一个 onChange 事件的回调函数，通过 event.target.value 读取
> 
> 用户输入的值。textarea 元素、select元素、radio元素都属于这种情况

## 组件的生命周期

组件的生命周期分成三个状态：

+ Mounting：已插入真实 DOM

+ Updating：正在被重新渲染

+ Unmounting：已移出真实 DOM

React 为每个状态都提供了两种处理函数，`will`: 函数在进入状态之前调用，`did`: 函数在进入状态之后调用，三种状态共计五种处理函数。

+ componentWillMount()

+ componentDidMount()

+ componentWillUpdate(object nextProps, object nextState)

+ componentDidUpdate(object prevProps, object prevState)

+ componentWillUnmount()

此外，React 还提供两种特殊状态的处理函数:

+ componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
 
+ shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

	    <script type="text/babel">
	      var Hello = React.createClass({
	        getInitialState: function () {
	          return {
	            opacity: 1.0
	          };
	        },
	
	        componentDidMount: function () {
	          this.timer = setInterval(function () {
	            var opacity = this.state.opacity;
	            opacity -= .05;
	            if (opacity < 0.1) {
	              opacity = 1.0;
	            }
	            this.setState({
	              opacity: opacity
	            });
	          }.bind(this), 100);
	        },
	
	        render: function () {
	          return (
	            <div style={{opacity: this.state.opacity}}>
	              Hello {this.props.name}
	            </div>
	          );
	        }
	      });
	      ReactDOM.render(
	        <Hello name="world"/>,
	        document.getElementById('example')
	      );
	    </script>


> 说明
> 
> 上面代码在hello组件加载以后，通过 componentDidMount 方法设置一个定时器，每隔100毫秒，就重新设置组件的透明度，从而引发重新渲染。
> 
> 另外，组件的style属性的设置方式也值得注意，不能写成 style="opacity:{this.state.opacity};",而是写成style={{opacity: this.state.opacity}}，这是因  为 [React 组件样式](https://facebook.github.io/react/docs/dom-elements.html)是一个对象，所以第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象。

## Ajax
组件的数据来源，通常是通过 Ajax 请求从服务器获取，可以使用 componentDidMount 方法设置 Ajax 请求，等到请求成功，再用 this.setState 方法重新渲染 UI

1、使用jQuery的ajax发送请求

    <script type="text/babel">
      var UserGist = React.createClass({
        getInitialState: function() {
          return {
            username: '',
            lastGistUrl: ''
          };
        },

        componentDidMount: function() {
          $.get(this.props.source, function(result) {
            var lastGist = result[0];
            if (this.isMounted()) {
              this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
              });
            }
          }.bind(this));
        },

        render: function() {
          return (
            <div>
              {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>.
            </div>
          );
        }
      });

      ReactDOM.render(
        <UserGist source="https://api.github.com/users/octocat/gists" />,
        document.getElementById('example')
      );
    </script>

2、React 本身没有任何依赖，完全可以不用jQuery，而使用其他库。我们甚至可以把一个Promise对象传入组件

    <script type="text/babel">
      var RepoList = React.createClass({
        getInitialState: function() {
          return {
            loading: true,
            error: null,
            data: null
          };
        },

        componentDidMount() {
          this.props.promise.then(
            value => this.setState({loading: false, data: value}),
            error => this.setState({loading: false, error: error})
          );
        },

        render: function() {
          if (this.state.loading) {
            return <span>Loading...</span>;
          }
          else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
          }
          else {
            var repos = this.state.data.items;
            var repoList = repos.map(function (repo, index) {
              return (
                <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
              );
            });
            return (
              <main>
                <h1>Most Popular JavaScript Projects in Github</h1>
                <ol>{repoList}</ol>
              </main>
            );
          }
        }
      });

      ReactDOM.render(
        <RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
        document.getElementById('example')
      );
    </script>
 
> 说明
> 
> 上面代码从Github的API抓取数据，然后将Promise对象作为属性，传给RepoList组件。
> 
> 如果Promise对象正在抓取数据（pending状态），组件显示"正在加载"；如果Promise对象报错（rejected状态），组件显示报错信息；如果Promise对象抓取数据成功（fulfilled状态），组件显示获取的数据。

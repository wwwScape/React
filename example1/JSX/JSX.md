## [JSX](http://www.css88.com/react/docs/introducing-jsx.html)

JSX 是JavaScrip 的一种扩展语法。推荐在 React 中使用这种语法来描述 UI 信息。JSX 可能会让你想起某种模板语言，但是它具有 JavaScrip 的全部能力。

（1）可以将任何 JavaScript 表达式放在 JSX 中的大括号({ })内。每个 React 元素都是一个真正的 JavaScript 对象，您可以将其存储在变量中或传递给程序。

（2）(JSX) 也是一个表达式，编译之后生成React元素，React元素就是一个真正的JS对象

## 使用

> 简单的 JSX 声明
	
	<script type="text/babel">
    const html = <h1>hello world</h1>;
    ReactDOM.render(
        html,
        document.getElementById("example")
    )
</script>

script标签的type需要定义为text/babel

> JSX中嵌入js表达式（必须大括号{}）
	
	<script type="text/babel">
	
	    const user = {
	        firstname:"John",
	        lastname:"Snow"
	    };
	
	    function formateName(user) {
	        return user.firstname +" "+ user.lastname;
	    }
	
	    const elem1 = (<h1>hello,{formateName(user)}</h1>);//使用括号可以避免分号自动插入的陷阱
	
	    const elem2 = <h1>hello,{user.firstname}</h1>;
	
	    ReactDOM.render(
	        elem1,
	        document.getElementById("example1")
	    );
	
	    ReactDOM.render(
	        elem2,
	        document.getElementById("example2")
	    )
	</script>

> JSX 也是一个表达式

编译之后，JSX 表达式就变成了常规的 JavaScript 对象。
这意味着你可以在 if 语句或者是 for 循环中使用 JSX，用它给变量赋值，当做参数接收，或者作为函数的返回值。

	<script type="text/babel">

	    const user = {
	        firstName:"John",
	        lastName:"Snow"
	    }
	
	    function formatName(user) {
	        return user.firstName+" "+user.lastName;
	    }
	    
	    function getGreeting(user) {
	        if (user) {
	            return <h1>Hello, {formatName(user)}!</h1>;
	        }
	        return <h1>Hello, Stranger.</h1>;
	    }
	
	    ReactDOM.render(
	        getGreeting(user),
	        document.getElementById("example")
	    )
	</script>

> JSX 可以指定一个属性（" " 与 { } 不能同时使用）

（1）使用双引号来指定字符串字面量作为属性值

（2）用花括号嵌入一个 JavaScript 表达式作为属性值

在属性中嵌入 JavaScript 表达式时，不要使用引号来包裹大括号。否则，JSX 将该属性视为字符串字面量而不是表达式。对于字符串值你应该使用引号，对于表达式你应该使用大括号，但两者不能同时用于同一属性。

	<script type="text/babel">
	    const elem1 = <div data-id="0">111</div>;
	
	    const user = {
	        id:123456,
	        name:"John Snow"
	    }
	
	    const elem2 = <div data-id={user.id}>{user.name}</div>
	
	    ReactDOM.render(
	        elem2,
	        document.getElementById("example")
	    )
	</script>

> 用 JSX 指定子元素

比起 HTML ， JSX 更接近于 JavaScript ， 所以 React DOM 使用驼峰(camelCase)属性命名约定, 而不是HTML属性名称。
例如，class 在JSX中变为className，tabindex 变为 tabIndex。

（1）如果是单标签，要像 XML 一样，使用 />立即闭合它

	const elem = <img src="img/download1-3.jpg" alt=""/>;

（2）JSX 标签可能包含子元素：
	
	<script type="text/babel">
    const elem = <img src="img/download1-3.jpg" alt=""/>;
    
    const elem2 = (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )

    ReactDOM.render(
        elem2,
        document.getElementById("example")

    )
	</script>

> JSX 防止注入攻击

在JSX中嵌入用户输入是安全的：

	const title = response.potentiallyMaliciousInput;
	// This is safe:
	const element = <h1>{title}</h1>;

默认情况下， 在渲染之前, React DOM 会格式化(escapes) JSX中的所有值. 从而保证用户无法注入任何应用之外的代码. 在被渲染之前，所有的数据都被转义成为了字符串处理。 以避免 XSS(跨站脚本) 攻击。

> JSX 表示对象

Babel 将JSX编译成 React.createElement(' ',{ },' ') 调用。

下面的两个例子是是完全相同的：
	
	const element = (
	  <h1 className="greeting">
	    Hello, world!
	  </h1>
	);

	const element = React.createElement(
	  'h1',
	  {className: 'greeting'},
	  'Hello, world!'
	);

React.createElement() 会执行一些检查来帮助你编写没有bug的代码，但基本上它会创建一个如下所示的对象：
	
	// 注意: 这是简化的结构
	const element = {
	  type: 'h1',
	  props: {
	    className: 'greeting',
	    children: 'Hello, world'
	  }
	};

这些对象被称作“React元素”。你可以把他们想象成为你想在屏幕上显示内容的一种描述。React会读取这些对象，用他们来构建DOM，并且保持它们的不断更新。


## 数据向下流动

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

## 移动端开发相关资源

### [React 设计思想](https://github.com/react-guide/react-basic)

### [React Native](http://reactnative.cn/docs/0.47/getting-started.html#content)

### [axios发去HTTP请求](https://www.kancloud.cn/yunye/axios/234845)

### [flexible](https://github.com/amfe/lib-flexible/blob/2.0/README.md)

### [React-router](https://react-guide.github.io/react-router-cn/docs/Introduction.html)

### [element-react](https://eleme.github.io/element-react/#/zh-CN/quick-start)--饿了吗团队

### [相关项目](https://github.com/DigAg/digag-pc-react/issues)

### [Redux](http://www.redux.org.cn/index.html)

### [import的几种使用情况](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

### [ant.design](https://ant.design/docs/react/introduce-cn)--蚂蚁金服

### [flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

Flex 容器（flex container）：display：flex

1. 容器默认存在两个轴：

	水平的主轴（main axis）：main start -> main end

	垂直的交叉轴（cross axis）：cross start -> cross end

2. 容器的属性（6个）

	* flex-direction：决定主轴的方向（即项目的排列方向）
		* flex-direction: row | row-reverse | column | column-reverse;		
	* flex-wrap:项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行
		*  flex-wrap: nowrap | wrap | wrap-reverse;	
	* flex-flow:属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
		*  flex-flow: <flex-direction> || <flex-wrap>;	
	* justify-content:定义了项目在主轴上的对齐方式。
		*  justify-content: flex-start | flex-end | center | space-between | space-around;	
	* align-items:定义项目在交叉轴上如何对齐
		* align-items: flex-start | flex-end | center | baseline | stretch;
	* align-content:定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
		*  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
3. Flex 项目（flex item）：简称项目（父容器下的所有子元素都是项目）

	* order：定义项目的排列顺序。数值越小，排列越靠前，默认为0。
	
	* flex-grow：定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
		* 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。 
	* flex-shrink：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
		* 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。
	
	* flex-basis：义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
		* 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。 
	* flex：flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
		* 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
	
	* align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
		* 该属性可能取6个值，除了auto，其他都与align-items属性完全一致。


## React全家桶

react

react-router

redux

fetch实现ajax（或者用axios）




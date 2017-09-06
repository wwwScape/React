## [列表(Lists) 和 键(Keys)](http://www.css88.com/react/docs/lists-and-keys.html)

补充：map()

array.map(function(currentValue,index,arr){return result}, thisValue);

说明：

* map() 不会对空数组进行检测。
* map() 不会改变原始数组。
* currentValue： 必填，当前元素的值
* index，arr：选填，当前元素的索引值，，当前元素属于的数组对象
* thisValue	：可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
如果省略了 thisValue ，"this" 的值为 "undefined"


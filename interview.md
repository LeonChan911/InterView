围绕项目问的，大部分讲项目
```js
    //权限管理: 路由（react-router-dom，config=name，path、child，sort） - 角色 - 用户（token）- 交互 
    //加密:md5(非对称加密) rsa（对称加密、数据量特别大、前端公钥）
    //动态表单：type id validator data
```
线程和进程区别
```js
//    特征                            内存
//进程:它代一个CPU所能处理的一个任务。     内存可共享
//    
//线程:  一个进程可以包含多个线程。        其他线程必须等它结束，才能使用这一块内存。

//Node中：Process就是进程。多进程单线程。
//Node中：虽然是单线程模型，但是基于事件驱动、异步非阻塞模式。
//事件驱动：每一个IO工作被添加到事件队列中，线程循环地处理队列上的工作任务。
//当执行过程中遇到来堵塞(读取文件、查询数据库)时，线程不会停下来等待结果，而是留下一个处理结果的回调函数，转而继续执行队列中的下一个任务。

//异步非阻塞模式:
```
localstorage sessionstorage session cookie区别
```js
// cookie:可设置失效时间，默认是关闭浏览器后失效（携带在HTTP头中）
// session:cookie进行标记的。在服务端会设置一个响应头Set-Cookie:SESSIONID=12345678
// sessionStorage:仅在当前会话下有效，关闭页面或浏览器后被清除
// localStorage:永久
 
// 使用场景：
// localStorage可以用来统计页面访问次数。
// sessionStorage可以用来统计当前页面元素的点击次数。
// cookie一般存储用户名密码相关信息，前后端进行用户的身份认证，标记用户.
```

```js
//koa2 MVC框架  
//          koa2             koa1                   express
//异步      async/await    generator/yield          异步回调
//ctx.request和ctx.req的区别
//（1）ctx.request:是Koa2中context经过封装的请求对象，它用起来更直观和简单。
//（2）ctx.req:是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到

//通过koa-bodyparser接收post请求
// 表单请求：multipart/form-data
```


前端模块化 
```js
//解决的问题
//1.抽离公共代码，
//2.隔离作用域，避免变量冲突等。
//3.将一个复杂的系统分解为多个模块以方便编码
//CMD 按需加载
//RequireJS
//import 编译时加载（静态执行）
//webpack打包策略 import会被编译成 require/exports （CommonJS规范）
//manifest 文件是最先加载的，manifest是在vendor（包含了node_moudle）的基础上，再抽取出要经常变动的部分，通过manifest.js文件来管理bundle文件的运行和加载。
```
http1.0/1.1/2.0
```js
//HTTP1.1默认使用长连接，可有效减少TCP的三次握手开销。
//HTTP 1.1支持只发送header信息(不带任何body信息)，如果服务器认为客户端有权限请求服务器，则返回100，否则返回401。客户端如果接受到100，才开始把请求body发送到服务器。
//HTTP2.0使用多路复用技术.sever push
```
http2.0对前端有什么影响
```js
//TTFB（Time To First Byte）时间明显减少.从浏览器发送请求开始，到接受到来自服务器
//ie11以上
//sever push,推送服务
```
排序算法
```js
//交换排序:冒泡排序、快速排序
//插入排序、选择排序等
//冒泡排序：
//1.依次对比相邻2个数字，前者比后者大就换位置。
//2.重复一的操作
const sort=(arr)=>{
    for(let i =0; i<arr.length;i++){
        let temp=arr[i];
        for(let j =i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
//快速排序
//1.从数组中取出一个数作为基准数
//2.大于基准数的放左边、小于基准数的放右边
//3.重复操作1、2的步骤
function quickSort(arr){
   //如果数组<=1,则直接返回
   if(arr.length<=1){return arr;}
   var pivotIndex=Math.floor(arr.length/2);
   //找基准，并把基准从原数组删除
   var pivot=arr.splice(pivotIndex,1)[0];
   //定义左右数组
   var left=[], right=[];
   //比基准小的放在left，比基准大的放在right
   for(var i=0;i<arr.length;i++){
    if(arr[i]<=pivot){
     left.push(arr[i]);
    }else{
     right.push(arr[i]);
    }
   }
   //递归
   return quickSort(left).concat(pivot, quickSort(right));
}
```


nginx
```js
// 1）nginx的反向代理：proxy_pass
// 2）nginx的负载均衡：upstream
//nginx -s reload 
//防止csrf  valid_referers
```
react diff原理 （必须）
```js
//diff算法
//传统diff n^3
//react 中用了调和 三大策略
// 策略一（tree diff）：
// Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。如果跨节点重新创建。
//层级控制、如果当前节点被删除，下面不会被比较

// 策略二（component diff）：
// 拥有相同类的两个组件 生成相似的树形结构，可能vitrual dom没有变化 用户可以同过shouldComponentUpdate计算
// 拥有不同类的两个组件 生成不同的树形结构。

// 策略三（element diff）：
// 对于同一层级的一组子节点，通过唯一id区分。
//移动 通过index开始 ，就行对比。 

//fiber
//react16 以前是同步渲染，一口气完成，16用了切片技术。fiber是个链表
//有child和sibing属性，指向第一个子节点和相邻的兄弟节点
//对开发者的影响：
//componentWillMount componentWillReceiveProps componentWillUpdate 不在安全，可以被打断。
//如何试用Fiber异步渲染、
const AsyncMode = React.unstable_AsyncMode;
const createApp = (store) => (
      <AsyncMode>
        <App store={store} />
      </AsyncMode>
);
底层代码：
window.requestIdleCallback()
//利用这个API在浏览器空闲期执行任务
```
优化性能 （必须背出来）
```js
// 原则：多使用内存、缓存或者其他方法、减少CPU计算、减少网络请求
// 解决：1.加载资源优化
//   2.渲染优化
//   3.CSS放在前、JS放在后
//   4.懒加载（图片懒加载、下拉加载更多）
//   5.减少dom的操作，合并操作
//   6.对事件做节流
//   7.减少浏览器的回流 用visible：hidden 代替dispaly:none
// 

//请求设置https缓存 Cache-Control
//gzip压缩技术
//react优化  shouldComponentUpdate （PureComponent）、memo （第一个参数组件、第二个参数类似shouldComponentUpdate）
//webpack 优化 splitchunks
```
状态管理
```js
// mobx  Mobx 使用了 Object.defineProperty 拦截 getter 和 setter，
// redux dispach 用于action的分发 改变store里的state
//    subscribe 注册listener、store里面state发生改变，执行listener
//    getState：读取store是state
//    replaceReducer：替换reducer，改变state修改的逻辑
```
数组去重
```js
const uniqueArr=(arr:[])=>{
    return arr.reduce((a,b)=>{
       !a.includes(b) && a.push(b)
       return a;
    },[])
}
```
随机数
```js
parseInt(Math.random()*(max-min+1)+min,10);
```
小驼峰转大驼峰
```js
 function change(str){
   let newStr='';
   let strArr=str.split('_')
   if(strArr.length>1){
   strArr.map((item,index)=>{
     if(index===0){
        newStr=item
     }else{
        newStr=newStr+(item.substr(0,1).toUpperCase()+item.substr(1,item.length-1))
     }
   })
    return newStr
   }
    return newStr
 }
```
```js
// axios特性
// 从浏览器中创建 XMLHttpRequests
// 从 node.js 创建 http 请求
// 支持 Promise API
// 拦截请求和响应
// 转换请求数据和响应数据
// 取消请求
// 自动转换 JSON 数据
//客户端支持防御 CSRF攻击
```
```js
//  如何防御CSRF攻击 Cross-site request forgery
//  1.验证 HTTP Referer 字段；
//  2.在请求地址中添加 token 并验证；
//  3.在 HTTP 头中自定义属性并验证。
```
```js
//webpack hmr 热更新
//HMR
//HotModuleReplacementPlugin
```
```js
//移动端自适应的解决方式
//px2rem-loader
https://blog.csdn.net/github_38928905/article/details/90080956
import 'lib-flexible/flexible'
const px2rem = require('postcss-px2rem-exclude');
```
```js
//BundleAnalyzerPlugin 分析webpack包

```
```js
Generator函数 遍历器
返回一个遍历器对象
{
  value:12,
  done:false
}
```

```js
//webpack打包优化
多核打包
splitChunks,minChunks （依赖的重复引用，公共包特别大）
将第三方库的代码单独打包
optimization:{
    splitChunks: {
      maxInitialRequests: 4,
       cacheGroups: {
        vendors: { // 基本框架
          chunks: 'all',
          test: /(react|react-dom|react-dom-router|babel-polyfill|mobx)/,
          priority: 100,
          name: 'vendors',
        },
        d3Venodr: { // 将体积较大的d3单独提取包，指定页面需要的时候再异步加载
          test: /d3/,
          priority: 100, // 设置高于async-commons，避免打包到async-common中
          name: 'd3Venodr',
          chunks: 'async'
        },
        echartsVenodr: { // 异步加载echarts包
          test: /(echarts|zrender)/,
          priority: 100, // 高于async-commons优先级
          name: 'echartsVenodr',
          chunks: 'async'
        },
        'async-commons': { // 其余异步加载包
          chunks: 'async',
          minChunks: 2,
          name: 'async-commons',
          priority: 90,
        },
        commons: { // 其余同步加载包
          chunks: 'all',
          minChunks: 2,
          name: 'commons',
          priority: 80,
        },
      }
  }
}
chunks     	含义
all	        把动态和非动态模块同时进行优化打包；所有模块都扔到 vendors.bundle.js 里面。
initial	    把非动态模块打包进 vendor，动态模块优化打包
async	      把动态模块打包进 vendor，非动态模块保持原样（不优化）
```
```js
Set的取值 转成数组
const value=new Set([4,5,6]);
[...value],Array.from(value)
const iterator =value[Symbol.iterator]()
```
```js
原型方法 构造函数和实例都能调用
静态方法 构造函数能调用
实例方法 实例化后才能调用
```
```js

①__proto__和constructor属性是对象所独有的；
__proto__属性都是由一个对象指向一个对象，
② prototype属性是函数所独有的。
function Person(){

}
const p1= new Person();
console.log(p1.proto === Person.prototype);
// hasOwnProperty方法可用于检测属性是否是实例属性，in则会遍历所有属性
```
```js
瀑布流   容器：display: flex;
             flex-direction: row;
        列表 display: flex;
            flex-direction: column;
            width: calc(100%/3);
```
```js 发布订阅
class Event {
  consructor(){}
  handlers={}
  addEventListener(type,handler){
    if(!(type in this.handlers)){
        this.handlers[type]=[];
    }     
    this.handlers[type].push(handler)
  }
  distpatchEvent(type,...params){
    if(!(type in this.handlers)){
      return new Error('未注册该事件')

    }
    this.handlers[type].forEach(hander=>{
      hander(...params)
    })
  }
  removeEventListener(type,handler)=>{
    if(!(type in this.handler)){
      return new  Error('无效事件')
    }
    if(!handler){
      delete this.handlers[type]
    }else{
      const idx =this.handlers[type].findIndex((ele)=>ele === handler)
      if(idx===-1){
        return new Error('没有绑定事件’)
      }
      this.handlers[type].splice(idx,1)
      if(this.handlers[type].length === 0){
        delete this.handlers[type]
      }
    }


  }
}

```
promise 的实现
```js
class MyPromise {
  constructor (handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }
    // 添加状态
    this._status = PENDING
    // 添加状态
    this._value = undefined
    // 添加成功回调函数队列
    this._fulfilledQueues = []
  // 添加失败回调函数队列
     this._rejectedQueues = []
    // 执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this)) 
    } catch (err) {
      this._reject(err)
    }
  }
// 添加resovle时执行的函数
_resolve (val) {
  if (this._status !== PENDING) return
  // 依次执行成功队列中的函数，并清空队列
  const run = () => {
    this._status = FULFILLED
    this._value = val
    let cb;
    while (cb = this._fulfilledQueues.shift()) {
      cb(val)
    }
  }
  // 为了支持同步的Promise，这里采用异步调用
  setTimeout(() => run(), 0)
}
// 添加reject时执行的函数
_reject (err) { 
  if (this._status !== PENDING) return
  // 依次执行失败队列中的函数，并清空队列
  const run = () => {
    this._status = REJECTED
    this._value = err
    let cb;
    while (cb = this._rejectedQueues.shift()) {
      cb(err)
    }
  }
  // 为了支持同步的Promise，这里采用异步调用
  setTimeout(run, 0)
}
  // 添加then方法
  then(onFulfilled, onRejected) {
    const { _value, _status } = this
    switch (_status) {
    // 当状态为pending时，将then方法回调函数加入执行队列等待执行
    case PENDING:
      this._fulfilledQueues.push(onFulfilled)
      this._rejectedQueues.push(onRejected)
      break
    // 当状态已经改变时，立即执行对应的回调函数
    case FULFILLED:
      onFulfilled(_value)
      break
    case REJECTED:
      onRejected(_value)
      break
  }
  // 返回一个新的Promise对象
  return new MyPromise((onFulfilledNext, onRejectedNext) => {
  })
}
```
```js
//  实现bind
Function.prototype.bindFn=function(thisArg) {
   if(typeof this !== 'function') {
         throw new TypeError(this+' is not a function');
   }
   // 调用bindFn方法的函数的引用
   var self = this;
   // 以数组形式保存第二个及其以后的参数
   var beforeArg = [].slice.call(arguments,1);
 
   return function() {
        // 以数组形式保存着当前函数的所有参数
        var afterArg = [].slice.call(arguments);
        // bindFn第二个及其以后的参数和当前函数所有参数的 集合
        // 全部传到self函数的参数里
        var finalArgs = beforeArg.concat(afterArg);
        // self中的this指向绑定到 thisArg
        return  self.apply(thisArg, finalArgs);
   }
}

```
```js
performance
重定向耗时 = redirectEnd - redirectStart;

DNS查询耗时 = domainLookupEnd - domainLookupStart;

TCP链接耗时 = connectEnd - connectStart;

HTTP请求耗时 = responseEnd - responseStart;

解析dom树耗时 = domComplete - domInteractive;

白屏时间 = responseStart - navigationStart;

DOMready时间 = domContentLoadedEventEnd - navigationStart;

onload时间 = loadEventEnd - navigationStart;

```
```js
作用域：闭包中的变量并不保存中栈内存中，而是保存在堆内存中
引用类型：Object、Array、RegExp、Date、Function（在堆）
```
```js
css3 自适应4大关键字
　width:fill-available表示撑满可用空间
  实现多元素等高: height:fill-available;

  width:fit-content 收缩为内容的宽度
  width:fit-content;margin:auto;  实现水平居中

  width:min-content表示采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度

  width:max-content表示采用内部元素宽度值最大的那个元素的宽度作为最终容器的宽度。 
  
  实现自适应气泡：word-break:break-word;width:max-content;max-width:100%;
```
```js
找到第一个没有重复的值
function firstNoRepeat(arr){
  let onlyItem =null;
  for(const item in arr){
      if(arr.indexOf(item)===arr.lastIndexOf(item)){
        onlyItem=item;
        break;
      }
  }
  return onlyItem;
}

```
```js
数组的扁平化
1.直接调用
let arr =[1, [2, [3, [4, 5]]], 6];
arr_flat = arr.flat(Infinity);
2.递归
function flat(arr){
  let result =[];
  const fn=function(arr){
     for(let item of arr){
        if(Array.isArray(item)){
          fn(item)
        }else{
          result.push(item)
        }
    }
  }
}


```
```js
//算出股票最优卖出点和买入点
let arr =[12331,23424,123213,123213,243234,543543,345435];
const findTowMax=(arr)=>{
  let result=[];
  for(let i=0;i<arr.length;i++){
      for(let j=1;j<arr.length-i;j++){
        let lastItem=arr[i];
        let nextItem=arr[j];
        result.push({
            max:nextItem-lastItem,
            last:nextItem,
            next:lastItem
        })
      }
  }
  console.log('result',result);
  return result.reduce((a,b)=>{
      if(a.max>b.max){
        return a;
      }else{
        return b;
      }
    },{})
}
```
```js
react-router
BrowserHistory：pushState、replaceState;
HashHistory：location.hash、location.replace
```
```js
Babel 转译
ES6代码输入 ==》 babylon进行解析 ==》 得到AST
==》 plugin用babel-traverse对AST树进行遍历转译 ==》 得到新的AST树
==》 用babel-generator通过AST树生成ES5代码

新增的API等（如Proxy、Set等），这些babel是不会转译的。需要用户自行引入polyfill来解决
```
```js
设置border-sizing：border-box；那就会占div的宽度
```

平时会看哪些
github、掘金、思否
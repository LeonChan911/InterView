# 简答题：
1.什么是函数节流、防抖，为什么要使用函数节流、防抖，如何实现？
```js
//频繁触发,但只在特定的时间内才执行一次代码
//函数节流应用的实际场景，多数在监听页面元素滚动事件的时候会用到。因为滚动事件，是一个高频触发的事件。
function throttle(fun, delay) {
        let last, deferTimer
            return function (args) {
                let that = this
                let _args = arguments
                let now = +new Date()
                if (last && now < last + delay) {
                    clearTimeout(deferTimer)
                    deferTimer = setTimeout(function () {
                        last = now
                        fun.apply(that, _args)
                    }, delay)
                }else {
                    last = now
                    fun.apply(that,_args)
                }
        }
    }
```
```js
     //频繁触发,但只在特定的时间内没有触发执行条件才执行一次代码
     //函数防抖的应用场景，最常见的就是用户注册时候的手机号码验证和邮箱验证了。
function debounce(fn, delay) { 
     let timer;
     return function () {
       clearTimeout(timer)
       timer = setTimeout( () =>{
         fn.apply(this, arguments)
       }, delay)
     }
   }

```
2.描述一下 JS 的 new 操作符具体做了什么？
```js
var obj  = {}; 
obj.__proto__ = Base.prototype; 
Base.call(obj);
// 第一行，我们创建了一个空对象obj
// 第二行，我们将这个空对象的proto成员指向了Base函数对象prototype成员对象
// 第三行，我们将Base函数对象的this指针替换成obj。  
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    // 根据规范，返回 null 和 undefined 不处理，依然返回obj，不能使用
    // typeof result === 'object' ? result : obj
    return ret instanceof Object ? ret : obj;
}
```
3.说明一下cookie，sessionStorage，localStorage 的区别，以及在项目中的应用。
```js
// cookie:可设置失效时间，默认是关闭浏览器后失效（携带在HTTP头中）
// sessionStorage:仅在当前会话下有效，关闭页面或浏览器后被清除
// localStorage:永久
 
// 使用场景：
// localStorage可以用来统计页面访问次数。
// sessionStorage可以用来统计当前页面元素的点击次数。
// cookie一般存储用户名密码相关信息，一般使用escape转义编码后存储。
```

    
# 编程题：
1.JS 编码实现模版引擎变量替换。
cosnt year = '2017';
const month = '09';
const day='21';
const str = `${year}-${month}-${day}`;
console.log(str) 输出：2017-09-21
```js
  render (str,obj) {
        str = str.replace('${year}', obj.year)
        str = str.replace('${month}', obj.month)
        str = str.replace('${day}', obj.day)
        return str
      
    }
    tranform () {
 
      const str = render('${year}-${month}-${day}',{ year, month, day })
      console.log(str)
    }
```

2.封装一个 JS 的 HTTP 请求库。 
```js
 fetch(url, options) {
        options = options || {};
        options.url = url;
        options.method = (options.method || 'get').toUpperCase();
        options.dataType = options.dataType || 'json';
        options.headers = options.headers || {};
        options.timeout = options.timeout || null;
        const axiosPromise = axios(options).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return new Promise(function (resolve, reject) {
                    resolve(response);
                });
            }
            let error = new Error("系统繁忙，请稍后重试！");
            error.response = response;
            throw error;
        }).catch(function (error) {
            throw error;
        });
        return axiosPromise;
    }
```

1.instanceof原理
```js
//instanceof 是通过原型链判断的，A instanceof B, 在A的原型链中层层查找，是否有原型等于B.prototype，如果一直找到A的原型链的顶端null,仍然不等于B.prototype，那么返回false，否则返回true.
function instance(left,right){
      left=left.__proto__
      right=right.prototype
      while(true){
           if(left==null)
                return false;
           if(left===right)
                return true;
           left=left.__proto__
      }
}
```
react state原理
react diff算法优化点实现
promise.all实现对象的深层遍历
nginx负载均衡的原理
```js
//1.轮询
upstream  dalaoyang-server {
       server    localhost:10001;
       server    localhost:10002;
}
//2 权重
upstream  dalaoyang-server {
       server    localhost:10001 weight=1;
       server    localhost:10002 weight=2;
}
//3 iphash
upstream  dalaoyang-server {
       ip_hash; 
       server    localhost:10001 weight=1;
       server    localhost:10002 weight=2;
}
//4 最少连接
upstream  dalaoyang-server {
       least_conn;
       server    localhost:10001 weight=1;
       server    localhost:10002 weight=2;
}
//5.响应时间
upstream  dalaoyang-server {
       server    localhost:10001 weight=1;
       server    localhost:10002 weight=2;
       fair;  
}
```
实现一个解析json schema的组件
2.数据基本类型有哪些
3.判断数据类型
```js
    typeof //number、boolean、symbol、string、object（引用数据类型）、undefined、function（引用数据类型）
    Array.isArray
```
4.页面布局（水平居中，垂直居中等）
```css
.{
    display:flex;
    justify-content:center;
    align-items:center;
}
```
5.深度克隆（写代码）
```js
function deepClone(origin,target){
    var target = target || {};
    target = JSON.parse(JSON.stringify(origin));
    return target;
}
function deepClone(obj){
  　　let objClone =  Array.isArray(obj) ? [] : {};
  　　if (obj && typeof obj === 'object') {
  　　　　for(let key in obj){
  　　　　　　if (obj[key] && typeof obj[key] === 'object'){
  　　　　　　　　objClone[key] = deepClone(obj[key]);
  　　　　　　}else{
  　　　　　　　　objClone[key] = obj[key]
  　　　　　　}
 　　　　}
 　　}
 　　return objClone;
 }
```
6.原型链
7.继承原理
8.继承方式（写代码）
9.移动端自适应方案
```js
//判断屏幕分辨率，设置顶层font-size，使用rem
```
10.http原理等（http2.0），DNS相关
11.域名发散，域名收敛等
12.性能优化方案
13.VUE双向绑定原理，生命周期之类的常规问题
14. 
15.防抖节流（写代码）
16.遇到哪些兼容性问题
17.如何等分布局
18.flex布局
19.vue写组件的注意事项
20.vue组件间如何传值
21.vuex什么作用
22.http常用的首部字段




# 一面：
24.1、浏览器阻塞
25.2、渲染流程
26.3、Promise执行流程及API、原理
27.4、模块化发展史
28.5、管理经验
29.6、一个并发Promise编程题
30.7、浏览器原理(执行栈、堆、事件循环、垃圾回收)
31.8、未来规划

# 二面：
33.1、做过什么效率或者性能优化的事情不
34.2、实现两栏布局，左固定右自适应
35.3、一个异步编程题
36.4、一个bind、call、apply的编程题
37.5、vue更新原理
38.6、聊聊自己觉得做的比较好的点

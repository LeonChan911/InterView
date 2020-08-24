// dom xss
```js
1.location.search中禁止 常见的几种伪协议"javascript:","vbscript:","data:"
2.在有输入的时候注意 innerHTML ,document.write
```



//强缓存
cache-control: max-age=5
//协商缓存
```js
Etag / If-None-Match
Last-Modified / If-Modified-Since
```


//HMR - Hot Module Replacement
```js
new HtmlWebpackPlugin({
    template: __dirname + '/app/index.tmpl.html'
  }),
  new webpack.HotModuleReplacementPlugin()
```
```js
hybrid
从native调用js
jsContext = webView.value(forKeyPath: "documentView.webView.mainFrame.javaScriptContext") as? JSContext
jsContext.evaluateScript("var a = 1;")
jsContext?.objectForKeyedSubscript("jsMethod")

从js调用native函数
window.WebViewJavascriptBridge
```
```js
js EventLoop
宏任务一般包括：整体代码script，setTimeout，setInterval、setImmediate。
微任务一般包括：原生Promise(有些实现的promise将then方法放到了宏任务中)、process.nextTick、 MutationObserver

1.存在微任务的话，那么就执行所有的微任务
2.微任务都执行完之后，执行第一个宏任务，
循环 1， 2
```
```js
link 和 import 的区别
两者都是外部引用CSS的方式，但是存在一定的区别：
区别1：link除了引用样式文件，还可以引用图片等资源文件，而import只引用样式文件
区别2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
区别4：link支持使用Javascript控制DOM去改变样式；而@import不支持。
```
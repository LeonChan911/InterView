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
微任务一般包括：原生Promise(有些实现的promise将then方法放到了宏任务中)、process.nextTick、Object.observe(已废弃)、 MutationObserver
```
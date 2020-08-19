Function.prototype.bindFn=function (thisArg){
    if(typeof this !=='function'){
        throw new TypeError(this+'不是function');
    }
    const _this=this;
    const berforeArg=[].slice.call(arguments,1);
    return function (){
        const afterArg=[].slice.call(arguments);
        const finalArg=berforeArg.concat(afterArg)
        return _this.apply(thisArg,finalArg)
    }
}
const obj={
    name:88
}
function testFn(number){
    console.log('testFn',this,number)
}
const bd=testFn.bindFn(obj,99);
bd()

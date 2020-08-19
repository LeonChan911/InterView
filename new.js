function newObj(fn,...args){
    const newObj={};
    newObj.__proto__=fn.prototype;
    return function () {
        fn.apply(newObj,args);
        return newObj
    } 
}

function testsFn(){
    this.a=1;
    this.b=2;
    console.log(this.a,this.b)
}
let obj =newObj(testsFn)()
console.log('obj',obj)



Function.prototype.myapply=function(context){
    if(typeof this !=='function'){
        throw new TypeError('not fun');
    }
   
    context.fn=this;
    const args=[...arguments].slice(1);
    const result =context.fn(args)
    delete context.fn;
    return result
  
}
let obj={
    a:1
};
const fc=(a)=>{
    console.log(this,a)
}
fc.myapply(obj,32)
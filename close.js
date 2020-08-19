function close(){
    let a=1;
    const fn=(b)=>{
        return b+a
    }
    a++;
    return fn
}
close()(23)
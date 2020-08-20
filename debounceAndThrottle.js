function debounce(fn,delay){
    let time;
    return function () {
        clearTimeout(time);
        time=setTimeout(() => {
            fn.apply(this,arguments)
        }, delay);
    }
}
function throttle(fn,delay){
    let canRun =true;
    return function () {
        if(!canRun){
            return
        }
        canRun =false;
        setTimeout(() => {
            fn.apply(this,arguments)
            canRun =true;
        }, delay);
    }
}
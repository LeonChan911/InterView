function promise(fn) {

    let status = 'PADDING';
    let value = null;
    let successQueues = [];
    let failQueue = [];

    this.then = function (onResovle) {
        if (status === 'PADDING') {
            successQueues.push(onResovle);
            return this;
        } else if (status === 'RESOLVED') {
            onResovle(value)
        } 
    }
    this.catch=function(onReject){
        if (status === 'PADDING') {
            failQueue.push(onReject)
            return this;
        } 
        if (status === 'REJECTED') {
            onReject(value)
        } 
    }
    const resolve = (val) => {
        setTimeout(() => {
            status = 'RESOLVED';
            value = val;
            for (let item of successQueues) {
                item(value)
            }
        }, 0);

    }

    const reject = (err) => {
        setTimeout(() => {
            status = 'REJECTED';
            value = err;
            for (let item of failQueue) {
                item(value)
            }
        }, 0);

    }
    fn(resolve, reject)
}
promise.all=function(promises){
    return new promise((resolve,reject)=>{
        let inedex=0;
        let result=[];
        if(promises.length===0){
            resolve(result)
        }else{
          function processValue(i,value){
              result[i]=value;
              if(++inedex === promises.length){
                  resolve(value)
              }
          } 
          for(let i in promises){
            promise.resolve(promises[i])
            .then((value)=>{
                processValue(i,value)
            })
            .catch((e)=>{
                reject(e)
            })
          }
        }
    })
}

function f1(num){
    return new Promise((resolve,reject)=>{
        // setTimeout(() => {
        //     resolve(++num)
        // }, 1000);
        setTimeout(() => {
            reject('错误')
        }, 1000);
    })
}
f1(22).then(data=>{
    console.log('data',data);
}).catch((e)=>{
    console.log('e',e);
})

const promiseRetry = (query, times, delay = 1000) => { //每隔多久执行一次
    return new Promise((resolve, reject) => {
        const attempt = () => {
            query().then((val) => {
                resolve(val)
            }).catch((error) => {
                if (times === 0) {
                    reject(error)
                } else {
                    times--;
                    setTimeout(() => {
                        attempt()
                    }, delay);
                }
            })
        }
        attempt()
    })
}
const promiseRetryByAllTime = (query, times, allTime ) => {
    let count = 1
    const timer = setInterval(() => {
        count++
    }, 1000);
    const trys = async (resolve, reject) => {
        while (times > -1) {
            try {
                const res = await query()
                resolve(res)
            } catch (error) {
                if (times === 0) {
                    reject(error)
                }
                if(count >= allTime){
                    reject('超时')
                    clearInterval(timer)
                }
                times--
            }
        }
    }
    return new Promise(trys)
}

const querys = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(0)
        }, 1000);
    })
}
promiseRetryByAllTime(querys, 3, 1).catch((error) => {
    console.log('error', error);
})
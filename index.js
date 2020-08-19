let arr = [9, 9, 3, 1, 2, 2, 32];
const findTowMax = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let lastItem = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextItem = arr[j];
            result.push({
                max: nextItem - lastItem,
                last: lastItem,
                next: nextItem
            })
        }
    }
    return result.reduce((a, b) => {
        if (a.max > b.max) {
            return a;
        } else {
            return b;
        }
    }, {})
}
const findMax = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    let maxBenifit = 0;
    let min = arr[0]

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < min) {
            min=arr[j]
        } else if (arr[j] - min > maxBenifit) {
            maxBenifit = arr[j] - min;
            last = min;
        }
    }
    return maxBenifit;
}
const findOneNoRepeat = (arr) => {
    let num = null;
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        let hasUbique = true;
        for (let j = 0; j < arr.length; j++) {
            const nextItem = arr[j];
            if (item === nextItem && i !== j) {
                hasUbique = false;
            }
        }
        if (hasUbique) {
            num = item;
            break;
        }
    }
    return num;

}

console.log('max:', findTowMax(arr), findMax(arr), findOneNoRepeat(arr))







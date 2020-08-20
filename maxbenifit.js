let arr = [9, 9, 3, 1, 2, 2, 32];

function maxBenifit(arr){
    let min =arr[0];
    let maxBenefit=0; 
    arr.forEach(element => {
            if(element<min){
                min=element
            }else if(element-min> maxBenefit){
                maxBenefit=element
            }
    });
    return maxBenefit
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

console.log('max:', maxBenifit(arr), findOneNoRepeat(arr))









const fastSort=(arr)=>{
    if(arr.length<=1){
        return arr;
    }
    const indexNumber=Math.floor(arr.length/2);
    const midValue=arr.splice(indexNumber,1)[0];
    let left=[];
    let right=[];
    for(let item of arr){
        if(item<=midValue){
            left.push(item);
        }else{
            right.push(item)
        }
    }
    return fastSort(left).concat(midValue,fastSort(right))
}
const bubuleSort=(arr)=>{
    for(let i =0;i<arr.length;i++){
        let mid=arr[i]
        for(let j =i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                arr[i]=arr[j]
                arr[j]=mid
            }
        }
    }
    return arr;
}
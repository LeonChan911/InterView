const search = function(nums, target) {
    let l=0,r=nums.length-1;
    while(l<=r){
        var mid=parseInt((l+r)/2);
        if(target===nums[mid]) 
            return mid;
        else if(target<nums[mid])
            r=mid-1;
        else if(target>nums[mid])
            l=mid+1;
    }
    return -1;
};
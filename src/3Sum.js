/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
    这道题的瓶颈在于排除相同情况的重复计算，主要是第一层遍历中的过滤，然后再是第二层的过滤
 */
var threeSum = function(nums) {
    var retArr = [];
    var i, j, k;
    var sum;
    var len = nums.length;
    // 不要用默认的排序，排序方法要自己写才能保证正确
    nums.sort(function(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        return -1;
    });
    
    for (i = 0; i < len - 2; i++) {
        // 排除同种情况的解
        if (i === 0 || (i > 0 && nums[i] != nums[i - 1])) {
            j = i + 1;
            k = len - 1;
            sum = 0 - nums[i];
            // 从两端往中间遍历
            while(j < k) {
                if (nums[j] + nums[k] === sum) {
                    retArr.push([
                        nums[i], nums[j], nums[k]
                    ])
                    // 排除同种情况的解
                    while(j < k && nums[j] === nums[j + 1]) j++;
                    while(j < k && nums[k] === nums[k - 1]) k--;
                    // 无论上面两个循环是否进行，最后都要再做一次递减和递增，否则会出现无限循环的情况
                    j++;
                    k--;
                } else if (nums[j] + nums[k] < sum) {
                    j++;
                } else {
                    k--;
                }
            }
        }
    }
    return retArr;
};
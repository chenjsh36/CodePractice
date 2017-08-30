/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var i, j, k;
    var len = nums.length;
    var min = Infinity;
    var sum;
    var tmp;
    var ret;
    nums.sort(function(a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        return -1;
    })
    
    for (i = 0; i < len - 2; i++) {
        // console.log('for:', nums[i]);
        if (i === 0 || nums[i] !== nums[i - 1]) {
            j = i + 1;
            k = len - 1;
            sum = target - nums[i];
            while(j < k) {
                // sum = nums[j] + nums[k] + nums[i]
                tmp = Math.abs(sum - nums[j] - nums[k]);
                // console.log('i & j & k：', nums[i], nums[j], nums[k], nums[j] + nums[k] + nums[i], tmp, min);
                if (tmp < min) {
                    min = tmp;
                    ret = nums[j] + nums[k] + nums[i];
                    console.log(nums[i], nums[j], nums[k], min);
                    // 这里不能遇到相同的就不检查，递减和递增都在外面进行
                    // while(j < k && (nums[j] === nums[j + 1])) j++;
                    // while(j < k && (nums[k] === nums[k - 1])) k--;
                } 
                if (nums[j] + nums[k] > sum) {
                    k--;
                } else {
                    j++;
                }
            }
        }
    }
    return ret;
};
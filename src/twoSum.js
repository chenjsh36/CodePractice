/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // var softArr = nums.sort();
    var softArr = nums;
    var i = 0,
        j = 1;
    for (; i < softArr.length - 1; i++) {
        for (j = i + 1; j < softArr.length; j++) {
            // console.log(i, j, softArr[i], softArr[j], target);
            if (softArr[i] + softArr[j] === target) {
                // console.log(i, j);
                return [i, j];
            }
        }
    }
    return null;
};
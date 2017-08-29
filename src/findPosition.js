// 计算出这个数字之前的所有数字组成的长度之和
exports.getFrontLen = function getFrontLen(num) {
    var len = ('' + num).length;
    var min = Math.pow(10, 0);

    var retLen = 0;
    for (var i = 1; i < len; i++) {
        retLen += (Math.pow(10, i) - Math.pow(10, i - 1)) * i; 
    }
    retLen += (num - Math.pow(10, len - 1)) * len

    return retLen
}

// 对长度为i的数字做长度为j（j < i) 的分隔，返回所有情况：
// 如对 12345678 做长度为2的分割，返回结果为:
// [
//  [1, 23, 45, 67, 8],
//  [12, 34, 56, 78]
// ]
exports.splitNumber = function(num, spLen) {
    var count = spLen;
    var numStr = '' + num;
    var numLen = numStr.length;
    var i = 1;
    var j = 0;
    var retArr = new Array(spLen);

    for (i = 1; i <= spLen; i++) {
        retArr[i-1] = [];
        retArr[i-1][0] = numStr.slice(0, i);
        for (j = i; j < numStr.length;) {
            retArr[i - 1].push(numStr.slice(j, j + spLen));
            j += spLen;
        }
    }
    return retArr;
}

// 对一组字符串做监测，判断是否为连续的数组
// 这里卡住了，因为如['9', '2'] 这种情况的要怎么判断为 19， 20
exports.checkSerial = function(array, spLen) {

}

exports.checkTwoNum = function(str1, str2, spLen) {

}

exports.findPosition = function(num) {
    return 0
}
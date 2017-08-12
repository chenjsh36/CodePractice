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
    var i = 0;
    var exp = new Exp()

    for (; i < count; i++) {

    }
}


exports.findPosition = function(num) {
    return 0
}
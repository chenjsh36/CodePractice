/**
 * 去掉一组整型数组重复的值
 */
exports.repetition = function(arr) {
    let hashTable = {};
    let data = [];

    arr.forEach((item) => {
        if (!hashTable[item]) {
            hashTable[item] = true;
            data.push(item);
        }
    })

    return data;
}
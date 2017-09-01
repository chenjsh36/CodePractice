exports.mostChar = function(str) {
    let hashTable = {};
    for (let i = 0, len = str.length; i < len; i++) {
        if (!hashTable[str[i]]) {
            hashTable[str[i]] = 1;
        } else {
            hashTable[str[i]] += 1;
        }
    }

    let maxChar = '';
    let maxNumber = 1;
    for (let i in hashTable) {
        if (hashTable[i] >= maxNumber) {
            maxChar = i;
            maxNumber = hashTable[i];
        }
    }

    return maxChar
}
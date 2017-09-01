/**
 * 回文判断
 * 正常的检查将字符串逐个颠倒字母顺序
 */

exports.checkPalindrom = function (str) {
    return str.split('').reverse().join('') === str;
}
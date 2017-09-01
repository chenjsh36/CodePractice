/**
 * 寻找一段字符串中的最长回文
 * 思路： 
 * 我们已经知道了怎么判断一个字符串是否是回文，通过颠倒字符串来判断，
 * 一开始的思路就基于这个，然后利用两层循环遍历所有子字符串来寻找最长回文
 * 后来发现一旦字符串长度过长，所用的时间也越长，导致超时
 * 所以要换另一种思路，通过一次循环遍历每个字符，寻找以这个字符为中心的最长回文，最后得到所有最长回文中最长的回文
 */

/**
 * 解法一：双层遍历，导致超时
 */
// var checkPalindrome = function(str) {
//     if (str.length === 1) return true;
//     return str === str.split('').reverse().join('');
// }
// var longestPalindrome = function(s) {
//     let begin = Date.now();
//     if (checkPalindrome(s) === true) return s;
    
//     let i, j, k;
//     let len = s.length;
//     let retStr = '';
//     let tmp = '';
//     for (i = 0; i < len; i++) {
//         for (j = len - 1; j >= i; j--) {
//             if (s[i] === s[j] && retStr.length <= j - i + 1) { // 回文的前提: 第一个和最后一个字符一样，长度比前一个监测到的回文长或等于
//                 if (checkPalindrome(s.substring(i, j + 1))) { // 回文监测
//                     tmp = s.substring(i, j + 1);
//                     if (retStr.length <= tmp.length) { // 是否是最长回文串
//                         retStr = tmp;
//                         // j = i - 1;
//                     }
//                 }
//             }
//         }
//     }
//     console.log(Date.now() - begin);
//     return retStr;
// };
// 

/**
 * 解法二
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    var i, j, k;
    var len = s.length;
    var maxP = '', maxNum = 0, tmpPOdd = '', tmpPEven = '';
    for (i = 0; i < len - 1; i++) {
        tmpPOdd = foundPalindrome(s, i, i);
        tmpPEven = foundPalindrome(s, i, i + 1);
        if (tmpPOdd.length >= maxNum) {
            maxNum = tmpPOdd.length;
            maxP = tmpPOdd;
        }
        if (tmpPEven.length >= maxNum) {
            maxNum = tmpPEven.length;
            maxP = tmpPEven;
        }
    }
    return maxP;
};

var foundPalindrome = function(str, a, b) {
    if (str[a] !== str[b]) return '';
    while(a - 1 >= 0 && b + 1 < str.length && str[a - 1] === str[b + 1]) {
        a--;
        b++;
    }
    return str.substring(a, b + 1);
}

exports.longestPalindrome = longestPalindrome;
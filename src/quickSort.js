/**
 * 快速排序
 * 推荐博文： http://blog.csdn.net/morewindows/article/details/6684558
 * 排序效率为 O(N*logN) 的几种排序中效率较高
 * 分治法 的排序思想
 * 基本步骤：
 * 1、先从数列中取出一个数作为基准数，
 * 2、分区过程， 将比这个数大的数放在他的右边，小于或者等于他的数放在左边
 * 3、再对左右区间重复第二步，直到各区间只有一个数
 */

/**实现步骤：
    1．i =L; j = R; 将基准数挖出形成第一个坑a[i]。

    2．j--由后向前找比它小的数，找到后挖出此数填前一个坑a[i]中。

    3．i++由前向后找比它大的数，找到后也挖出此数填到前一个坑a[j]中。

    4．再重复执行2，3二步，直到i==j，将基准数填入a[i]中。
*/

/**
 * 挖坑
 */
function ajustArr(arr, l, r) {
    var i = l, j = r;
    var x = arr[l];  // 第一个坑

    while (i < j) {
        // 从右向左找小于x的数来填 arr[i]
        while(i < j && arr[j] > x) {
            j--;
        }
        if (i < j) {
            arr[i] = arr[j]; // 将 arr[j] 填到 arr[i] 就形成一个新的坑
            i++;
        }

        while(i < j && arr[i] <= x) { // 从左向右寻找大于 x 的数来填 arr[j]
            i++;
        }
        if (i < j) {
            arr[j] = arr[i]; // 将 arr[i] 填到 arr[j] 形成一个新的坑
            j--;
        }
    }
    arr[i] = x; // 退出时， i === j， 将 x 填到这个坑中
    return i; // 这个时候， 小于 i 的都是小于等于 x 的， 大于i 的都是大于x的
}

/**
 * 分治法
 */
function quickSort(arr, l, r) {
    if (l < r) {
        var last = ajustArr(arr, l, r);
        quickSort(arr, l, last - 1); // 递归调用
        quickSort(arr, last + 1, r);
    }
    return arr;
}

exports.quickSort = quickSort;
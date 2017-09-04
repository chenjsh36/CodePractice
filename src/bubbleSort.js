/**
 * 冒泡排序
 */
function bubbleSort(arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            if (arr[i] > arr[j]) {
                let item = arr[i];
                arr[i] = arr[j];
                arr[j] = item;
            }
        }
    }
    return arr;
}

exports.bubbleSort = bubbleSort;
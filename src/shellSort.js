/**
 * 希尔排序
 * 实质上就是分组插入排序，
 * 该方法的基本思想是：先将整个待排元素序列分割成若干个子序列（由相隔某个“增量”的元素组成的）分别进行直接插入排序，然后依次缩减增量再进行排序，待整个序列中的元素基本有序（增量足够小）时，再对全体元素进行一次直接插入排序。因为直接插入排序在元素基本有序的情况下（接近最好情况），效率是很高的，因此希尔排序在时间效率上比冒泡排序和直接插入排序有较大提高。
 */
function shellSort(arr) {
    var i, j, gap, tmp, k;
    for (gap = arr.length / 2; gap > 0; gap /= 2) { // 步长
        for (i = 0; i < arr.length; i += gap) { // 直接插入排序
            for (j = i + gap; j < arr.length; j+= gap) {
                if (arr[j] < arr[j - gap]) {
                    tmp = arr[j];
                    k = j - gap;
                    while(k > 0 && arr[k] > tmp) {
                        arr[k + gap] = arr[k];
                        k -= gap;
                    }
                    a[k + gap] = tmp;
                }
            }
        }
    }
}


/**
 * 优化的希尔排序
 */
function shellSort2(arr) {
    var i, j, gap, tmp, k;

    for (gap = arr.length / 2; gap > 0; gap /= 2) {
        for (j = gap; j < arr.length; j++) {
            if (arr[j] < arr[j - gap]) {
                tmp = arr[i];
                k = j - gap;
                while(k >= 0 && arr[k] > tmp) {
                    a[k + gap] = a[k];
                    k -= gap;
                }
                a[k + gap] = tmp;
            }
        }
    }    
}
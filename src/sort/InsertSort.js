function exch(arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

// 插入排序
exports.sort = function(arr) {
	var len = arr.length,
		i = 1,
		j = 0;
	// 升序排序
	for (; i < len; i++) {
		// 将 a[i] 插入到 a[i - 1] a[i - 2]....之中
		for (j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
			exch(arr, j, j - 1);
		}
	}
}
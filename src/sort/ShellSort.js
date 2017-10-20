function exch(arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

// 希尔排序
exports.sort = function(arr) {
	var len = arr.length,
		h = 1,
		i,
		j;

	while( h < len / 3) {
		h = 3 * h + 1;
	}

	while (h >= 1) {
		for (i = h; i < len; i++) {
			for (j = i; j >= 0 && arr[j] < arr[j - h]; j -= h) {
				exch(arr, j, j - h);
			}
		}
		h = parseInt(h / 3);
	}
}
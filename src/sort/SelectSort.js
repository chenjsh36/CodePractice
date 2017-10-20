function exch(arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

// 选择排序
exports.sort = function(arr) {
	var i = 0, 
		j = 0,
		min = 0, 
		len = arr.length;
	for (; i < len; i++) {
		min = i;
		for (j = i + 1; j < len; j++) {
			if (arr[j] < arr[min]) min  =j;
		}
		exch(arr, i, min);
	}
	return arr;
}

function exch(arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function sort (arr, lo, hi) {
	if (hi <= lo) return;

	var j = partition(arr, lo, hi);
	sort(arr, lo, j - 1);
	sort(arr, j + 1, hi);
}

function partition(arr, lo, hi) {
	var i = lo,
		j = hi + 1, // 左右扫描指针
		v = arr[lo] // 切分元素
		;

	while(true) {
		// 左右扫描，检查扫描是否结束并交换元素
		while(arr[++i] < v) {
			if (i == hi) break;
		}
		while(v < arr[--j]) {
			if (j == lo) break;
		}
		if (i >= j) break;
		exch(arr, i, j);
	}
	exch(arr, lo, j); // 最后将切分元素放入正确的位置
	return j;
}

// 快速排序
exports.sort = function(arr) {
	sort(arr, 0, arr.length - 1);
}
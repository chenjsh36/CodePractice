// 归并排序
function MergeSort(arr) {
	sort(arr, 0, arr.length - 1);
}

function sort(arr, lo, hi) {
	if (hi <= lo) return;
	var mid = lo + parseInt((hi - lo) / 2);
	sort(arr, lo, mid); // 左半边排序
	sort(arr, mid + 1, hi); // 右半边排序
	merge(arr, lo, mid, hi); // 归并
}

function merge(arr, lo, mid, hi) {
	var tmp = [],
		i,
		j,
		k
		;
	
	for (i = lo; i <= hi; i++) {
		tmp[i] = arr[i];
	}

	i = lo;
	j = mid + 1;
	for (k = lo; k <= hi; k++) {
		if      (i > mid)         arr[k] = tmp[j++]; // 左半边用尽
		else if (j > hi)          arr[k] = tmp[i++]; // 右半边用尽
		else if (tmp[i] < tmp[j]) arr[k] = tmp[i++]; // 左半边当前元素小于右半边当前元素， 取左半边
		else                      arr[k] = tmp[j++]; // 相反
	}
}

exports.sort = MergeSort
var assert = require('assert')
var sort_select = require('../src/sort/SelectSort.js')
var sort_insert = require('../src/sort/InsertSort.js')
var sort_shell = require('../src/sort/ShellSort.js')
var sort_merge = require('../src/sort/MergeSort.js')
var sort_quick = require('../src/sort/QuickSort.js')

function getRandomArr(n) {
	var arr = [];
	while(n--) {
		arr.push(parseInt(Math.random() * 100));
	}
	return arr;
}

describe('==========排序系列=============', function() {
    describe('测试选择排序', function() {
        it('排序前后', function() {
        	var arr = getRandomArr(12);
        	console.log(arr.join(','));
        	sort_select.sort(arr);
        	console.log(arr.join(','));
        })
    })
    describe('测试插入排序', function() {
        it('排序前后', function() {
        	var arr = getRandomArr(12);
        	console.log(arr.join(','));
        	sort_insert.sort(arr);
        	console.log(arr.join(','));
        })
    })
    describe('测试希尔排序', function() {
        it('排序前后', function() {
        	var arr = getRandomArr(12);
        	console.log(arr.join(','));
        	sort_shell.sort(arr);
        	console.log(arr.join(','));
        })
    })
    describe('测试归并排序', function() {
        it('排序前后', function() {
        	var arr = getRandomArr(12);
        	console.log(arr.join(','));
        	sort_merge.sort(arr);
        	console.log(arr.join(','));
        })
    })
    describe('测试快速排序', function() {
        it('排序前后', function() {
        	var arr = getRandomArr(12);
        	console.log(arr.join(','));
        	sort_quick.sort(arr);
        	console.log(arr.join(','));
        })
    })
})
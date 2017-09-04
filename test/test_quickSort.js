var assert = require('assert');
var m = require('../src/quickSort.js');

var quickSort = m.quickSort;

describe('快速排序', function() {
    it('should eq 12345', function() {
        assert.equal(quickSort([3, 1, 5, 2, 4], 0, 4).join(''), '12345')
    })
})
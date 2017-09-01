var assert = require('assert');
var p = require('../src/repetition.js');

var repetition = p.repetition;

describe('数组去重', function() {
    it('should be equal', function() {
        assert.equal(repetition([1,13,24,11,11,14,1,2]).join(','), "1,13,24,11,14,2")
    })
})
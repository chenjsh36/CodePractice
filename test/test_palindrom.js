var assert = require('assert');
var p = require('../src/palindrom.js');

var checkPalindrom = p.checkPalindrom;

describe('回文检查', function() {
    it('should be true', function() {
        assert.equal(checkPalindrom('abcba'), true)
    })
    it('should be false', function() {
        assert.equal(checkPalindrom('abbc'), false)
    })
})
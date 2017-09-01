var assert = require('assert');
var m = require('../src/mostChar.js');

var mostChar = m.mostChar;

describe('监测重复最多的字符串', function() {
    it ('should be a', function() {
        assert.equal(mostChar('afjghdfraaaasdenas '), 'a');
    })
})
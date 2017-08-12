var assert = require('assert')
var example = require('../src/example.js')

describe('==========Add func test=============', function() {
    describe('func add()', function() {
        it('should be 2 when 1 add 1', function() {
            assert.equal(example.add(1, 1), 2)
        })
    })
})
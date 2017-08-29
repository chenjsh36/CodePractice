const assert = require('assert')
const file = require('../src/findPosition.js')

const findPosition = file.findPosition
const getFrontLen = file.getFrontLen
const splitNumber = file.splitNumber

describe('===========FindPosition Tests==============', function() {
    describe('[getFrontLen]', function() {
        it('should return 2 by 3', function(){
            assert.equal(getFrontLen(3), 2)
        })
        it('should return 9 by 10', function(){
            assert.equal(getFrontLen(10), 9)
        })
        it('should return 11 by 11', function(){
            assert.equal(getFrontLen(11), 11)
        })
        it('should return 0 by 1', function(){
            assert.equal(getFrontLen(1), 0)
        })
    })
    describe('[splitNumber]', function() {
        it('should return an array of length 2', function() {
            var retArray = splitNumber(12345678, 2);
            console.log('console in test:', retArray);
            assert.equal((splitNumber(12345678, 2))[0][0], 1)
        })
        it('should return an array of length 3', function() {
            var retArray = splitNumber(123456789, 3);
            console.log('console in test:', retArray);
            assert.equal(retArray[0][0], 1)
        })
    })
    // describe('test1', function() {
    //     it('should return 0 by default', function() {
    //         assert.equal(findPosition(0), 0)
    //     })
    //     it('should return 3 by "456"', function() {
    //         assert.equal(findPosition("456"), 3)
    //     })
    //     it('should return 79 by "454"', function() {
    //         assert.equal(findPosition("454"), 79)
    //     })
    //     it('should return 98 by "455"', function() {
    //         assert.equal(findPosition("455"), 98)
    //     })
    //     it('should return 8 by "910"', function() {
    //         assert.equal(findPosition("910"), 8)
    //     })
    //     it('should return 188 by "9100"', function() {
    //         assert.equal(findPosition("9100"), 188)
    //     })
    //     it('should return 187 by "99100"', function() {
    //         assert.equal(findPosition("99100"), 187)
    //     })
    //     it('should return 190 by "00101"', function() {
    //         assert.equal(findPosition("00101"), 190)
    //     })
    //     it('should return 190 by "001"', function() {
    //         assert.equal(findPosition("001"), 190)
    //     })
    //     it('should return 190 by "001"', function() {
    //         assert.equal(findPosition("00") , 190)
    //     })
    //     it('should return 190 by "001"', function() {
    //         assert.equal(findPosition("123456789") , 0)
    //     })
    //     it('should return 190 by "001"', function() {
    //         assert.equal(findPosition("1234567891") , 0)
    //     })
    //     it('should return 190 by "001"', function() {
    //         assert.equal(findPosition("123456798") , 1000000071)
    //     })
    //     it('should return 190 by "001"', function() {
    //         assert.equal(findPosition("10") , 9)
    //     })
    //     it('should return 190 by "001"', function() {
    //         assert.equal(findPosition("53635") , 13034)
    //     })
    //     it('should return 190 by "001"', function() {
    //         assert.equal(findPosition("040") , 1091)
    //     })
    // })
})
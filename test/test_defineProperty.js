var assert = require('assert');
var df = require('../src/defineProperty.js');
var ReactOb = df.ReactOb;

describe('数据响应化', function() {
    it('should react', function() {
        assert.equal(1, 1)
        var callback = function(newVal, oldVal, path) {
            console.log('数据响应：', newVal, oldVal, path);
        }
        var data = {
            a: 1,
            b: {
                c: 2,
                d: '123',
                e: [1, 2, 3],
                f: {
                    g: 22
                }
            }
        };
        var reactob = new ReactOb(data, callback);
        data.a = 2;
        data.b.c = 3;
        data.b.f.g = 4;
        data.b.e[1] = '修改数据无响应'
        data.b.e.push(4)
    })
})
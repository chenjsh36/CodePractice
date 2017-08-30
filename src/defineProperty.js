const OP = Object.prototype;

const ArrMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];


class ReactOb {
    constructor(obj, cb) {
        if (OP.toString.call(obj) !== '[object Object]') {
            console.log('The parameter should be obj', obj);
        }
        this.$cb = cb;
        this.observe(obj);
    }

    observe(obj, path) {
        if (OP.toString.call(obj) === '[object Array]') {
            this.overrideArrayProto(obj, path);
        }

        Object.keys(obj).forEach((key, index, keyArray) => {
            // 闭包存储值
            var oldVal = obj[key];
            var pathArray = path && path.slice(0); // 复制数组
            if (pathArray) {
                pathArray.push(key);
            } else {
                pathArray = [key];
            }

            Object.defineProperty(obj, key, {
                get: () => {
                    return oldVal;
                },
                set: (newVal) => {
                    if (oldVal !== newVal) {
                        if (OP.toString.call(newVal) === '[object Object]' || OP.toString.call(newVal) === '[object Array]') {
                            this.observe(newVal, pathArray);
                        }
                        // 如果有回调函数，调用
                        if (typeof this.$cb === 'function') {
                            this.$cb(newVal, oldVal, pathArray);
                        }
                        oldVal = newVal;
                    }
                }
            })
            // 如果是对象或者数组，递归遍历
            if (OP.toString.call(obj[key]) === '[object Object]' || OP.toString.call(obj[key]) === '[object Array]') {
                this.observe(obj[key], pathArray);
            }
        })
    }

    overrideArrayProto(array, path) {
        // 保存原始数组原型
        var originalProto = Array.prototype,
            overrideProto = Object.create(Array.prototype),
            self = this,
            result;
        // 遍历要重写的数组方法
        Object.keys(ArrMethods).forEach(function(key, index, array) {
            var method = ArrMethods[index],
                oldArr = [];

            Object.defineProperty(overrideProto, method, {
                value: function() {
                    oldArr = this.slice(0);

                    var arg = [].slice.apply(arguments);

                    // 调用原始 原型 的数组方法
                    result = originalProto[method].apply(this, arg);
                    // 对新的数组进行检测
                    self.observe(this, path);
                    self.$cb(this, oldArr, path);

                    return result;
                },
                writable: true,
                enumerable: false,
                configurable: true
            })
        }, this)

        // 让该数组实例的 __proto__ 属性指向 假的原型 overrideProto
        array.__proto__ = overrideProto
    }
}

exports.ReactOb = ReactOb
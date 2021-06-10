'use strict';
// 1. Реализовать возведение в целую степень.

console.log(pow(4, 3))

function pow(x,n) {
    if (n === 1) {
        return x
    } else {
      return   x * pow(x,  n -1)
    }
};

// 2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)

function globalFunction (n) {
    function wrapper (n) {
        if (n === 0) {
            return
        }
        console.log('(')
        wrapper(n - 1)
        console.log(')')
    }
    return wrapper(n)
};

globalFunction(3)

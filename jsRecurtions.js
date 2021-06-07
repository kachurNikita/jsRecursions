'use strict';
// 1. Реализовать возведение в целую степень.

const array = [3, 2, 3, 4, 5]
debugger
const result = array.reduce(exponentation)

function exponentation (a, b) {
   return Math.pow(a, b)
};

console.log(result)

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

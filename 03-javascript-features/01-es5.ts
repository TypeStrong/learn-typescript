// Use `import` instead of `var` to import type information and runtime import.
import ts = require('typescript')

var arr = [1, 2, 3]

arr.map(function (value) {
  console.log(value) // Notice that `value` is known to be a number. There's no types even specified yet.
})

// This is declared before usage and can not be inferred.
function sum (a: number, b: number) {
  return a + b
}

var result = arr.reduce(sum)

console.log(result * 10)

// Use an interface provided by a third-party.
var obj: ts.Map<number> = {
  a: 10,
  b: 20,
  c: 30,
  // d: 'foo' // Error.
}

Object.keys(obj).forEach(function (key) {
  console.log(obj[key])
})

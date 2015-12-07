// The spread operator is used on the other side of the rest operator. Gone are the days of using `Function.prototype.apply` just to call a function with an array of arguments.
// This all works on ES5 with TypeScript!

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

arr1.push(...arr2)

console.log(arr1) //=> [ 1, 2, 3, 4, 5, 6 ]

var parts = ['shoulders', 'knees']
var lyrics = ['head', ...parts, 'and', 'toes']

console.log(lyrics) //=> [ 'head', 'shoulders', 'knees', 'and', 'toes' ]

function add (...nums: number[]): number {
  return nums.reduce((x, y) => x + y)
}

const numbers = [25, -15]

// Multiple spread operator usages.
console.log(add(1, ...numbers, 66, ...[-10])) //=> 67

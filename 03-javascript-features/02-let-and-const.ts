// Both `let` and `const` are ES6 additions which use block scoping, instead of the traditional function scope used by `var`.

// Using `const` helps greatly with readability and understandability. Any new programmer immediately knows this value is immutible - it won't be changed further down in the execution.
const value = 'test'

// value = 'new value' //=> Error: Left-hand side of assignment expression cannot be a constant.

const array = [1, 2, 3]

// I recommend only using `let` when the value is not immutable - such as in a loop.
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

// Can not use `let` variables outside of the block scope.
// console.log(i) //=> Error: Cannot find name 'i'.

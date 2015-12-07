// Template strings are yet another new addition that has been a long time coming!
// They allow us to build a string with expressions nested directly inside without using string concatenation.
// TypeScript works with this, and still does type checking inside the expression.

const a = 55
const b = 76

console.log(`${a} ^ ${b} = ${Math.pow(a, b)}`)

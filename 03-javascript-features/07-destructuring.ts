// Destructuring refers to the ability to take an object, or array, and directly assign properties to variables.
// This is actually a pretty handy little feature that you don't realise you need until you use it.
// TypeScript, of course, supports types through this syntax as well.

const data = {
  fullName: 'Blake Embrey',
  email: 'hello@blakeembrey.com',
  luckyNumber: 3
}

// Object destructuring. Pick the properties you want.
const { luckyNumber } = data

console.log(luckyNumber)

const arrayData = [154, 'Blake', true]

// Array destructuring. Pick the elements you want.
const [,me] = arrayData

console.log(me)

// Object and array destructuring makes it easier to return multiple pieces of data back to the user too!

function lookup (name: string) {
  const username = 'blakeembrey'
  const email = 'hello@blakeembrey.com'

  return [username, email]
}

// However, an object might be clearer here, so judgement is wise.

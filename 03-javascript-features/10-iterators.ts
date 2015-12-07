// Iterators are a new features, much like promises, which define a way to do something native - in this case iterate. The only feature of an iterator is a `next` method and that it returns object of with `{ value: any, done: boolean }`.
// Support for iterables have been integrated at the language level with `for..of`. Like `for..in` or a for loop, this is used for iterating an iterative.
// An iterable is anything that implements `Symbol.iterator`. This can be user-defined and comes built in on some JavaScript prototypes such as `Array` and `Map`.
// TypeScript does not output Symbol support for ES5 automatically, but it does  support (using a normal `for` loop) when working with arrays or strings.

for (let value of [1, 2, 3]) {
  console.log(value)
}

for (let char of 'test') {
  console.log(char)
}

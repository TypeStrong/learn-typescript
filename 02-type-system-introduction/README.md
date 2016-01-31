# The Type System

In this chapter, we're going to briefly touch on the syntax for types in TypeScript which will allow us to move quickly in the following sections.

Look into `index.ts` to see some examples of the type system in action.

## Syntax

TypeScript uses postfix type annotations to denote the type of something. This can be seen with variables, function parameters, function return types, class property types and more.

## Basic Types

TypeScript exposes the JavaScript primitives, as well as a couple of extra types:

* `string` - the type is a primitive JavaScript string. E.g. `"hello"`.
* `number` - the type is a primitive JavaScript number. E.g. `10`.
* `boolean` - the type is a primitive JavaScript boolean. E.g. `true`.
* `any` - the type is _anything_.
* `any[]` - the type is an array of `any`.
* `void` - no type, effectively `undefined`.
* `() => any` - the type is a function that returns `any`.

## Type Inferencing

Type inferencing is used when the type is not provided explicitly. For instance, using `var x = 10`, TypeScript can infer that `x` is a number.

Type inferencing is also used for function callbacks. For example:

```ts
function takesCallback (cb: (error: Error) => any) {
  return cb(null)
}

takesCallback(function (err) {
  //=> `err instanceof Error`
})
```

## Interfaces

Interfaces are the way to type anything more complicated than our basic types, including functions and classes. Although you'll probably never use it in place of a function and class, you can imagine interfaces as the basic building block. The syntax is similar to JavaScript object, but using types and a couple of little syntax changes/additions.

```ts
interface MyInterface {
  value: string // Has a property which is a `string`.
  method (): number // Has a method that returns a `number`.
  (): boolean // It's a function that returns a `boolean`.
}
```

Interfaces can also use index types, which can be `string` or `number`.

```ts
interface Dictionary {
  [index: string]: string
}
```

## Type Assertions

TypeScript also allows you to override the inferred/analyzed type to what you actually need. This is used purely for telling the compiler that you know the type better than it does and it should not second guess you. Don't worry, the compiler won't feel betrayed by this, and will continue helping you with the new knowledge it acquired from you.

```ts
interface Foo {
  x: number
  y: number
}

var foo = {} as Foo
foo.x = 10
foo.y = 20
```

If you look around TypeScript libraries today, you might see this expressed as `var foo = <Foo> {}`. These expressions are compatible with each other, but the first method is preferred. You should always be careful when doing the compilers job here, in case you do miss something after you do the type assertion.

Wherever possible, it's preferable to use explicit types. For example:

```ts
var foo: Foo = {
  // The compiler will now error when forgetting properties.
}
```

Type assertions will only succeed if the compiler evaluates that the assertion is a subtype or supertype. If you need to go crazy, you can chain multiple type assertions using `any` first.

## Type Shorthand

Types can also be used with a shorthand syntax. In parameters, for instance, one can write an inline interface. It's also possible to use the `type` alias to create types from the shorthand.

```ts
type HelloWorld = string
type PrimitiveArray = Array<string | number | boolean>

// we can now use our type alias as a normal type...
function print(): HelloWorld {
  return 'Hello World'
}

var mixedArray: PrimitiveArray = [42, 'is', 'definitely', true]

// ...or we can write an inline interface in parameters
function getLabel (obj: { label: string }): string {
  return obj.label
}
```

## Extending and Implementing Interfaces

Interfaces can be used for the implementation of classes using the `implements` keyword which we'll use later. For now, we'll use `extends` to extend an interface with more information.

```ts
interface Animal {
  legs: number
}

interface Dog extends Animal {
  barks: boolean
}
```

## User-defined Type Guards

Type guards allow us to specify that a function implements the runtime check of this interface. For example, checking whether an object is a `Dog`.

```ts
function typeGuard (obj: Dog): obj is Dog {
  return !!obj.barks
}
```

## Generics

Generics provide a way to create reusable interfaces that accept any type. Here's a simple example:

```ts
function identity <T> (arg: T): T {
  return arg
}
```

This is just a building block for much more complex logic. When invoking a generic, you can pass the type inline:

```ts
var output = identity<string>('myString') // Type of `output` is 'string'.
```

Or let it be inferred.

```ts
var output = identity('myString') // Type of `output` is 'string'.
```

We'll dive into more complex generic usages through `index.ts`. Generics can also be used with `type` and `interface`.

## Union Types

Union types provide us with a way to express that a value can be one of many types. For example:

```
var value: string | string[] = 'test'

console.log(value.length) // Works because it exists on both `string` and `Array`.
```

## Intersection Types

An intersection type represents an entity that is of all types. For example:

```ts
function extend <A, B> (a: A, b: B): A & B {
  Object.keys(b).forEach(key => {
    a[key] = b[key]
  })

  return a as A & B
}
```

## Tuples

Tuple types are used to represent an array where the number of elements are known.

```ts
var x: [string, number]
// Initialize it.
x = ['hello', 10] // OK.
// Initialize it incorrectly.
x = [10, 'hello'] // Error.
```

When accessing an element with a known index.

```ts
console.log(tuple[0].substr(1))
console.log(tuple[1].substr(1)) //=> Error: Property 'substr' does not exist on type 'number'.
```

## `typeof`

TypeScript also has a `typeof` operate that can be used in type expressions. `typeof` takes a value and produces the type a value has.

TypeScript can also use `typeof` with type expressions. This is useful for extracting the type from a value - commonly used for lazy loading.

```ts
import * as TS from 'typescript'

declare function require (module: string): any

function eventually () {
  var ts: typeof TS = require('typescript')
}
```

A common attempt upon discovering `typeof` is to get the constructor of a class in a generic function, since classes produce two types. However, `typeof` will only work on values. To achieve this, you should use an interface:

```
class MyClass { bar: string }

function create <T> (Clazz: { new (): T }) {
  return new Clazz()
}

var c = create(MyClass)
```

## `this`

The type expression, `this`, is used to represent the type of the current execution context.

```ts
class Calculator {
  constructor (protected value: number = 0) {}

  result (): number {
    return this.value
  }

  add (operand: number) {
    this.value += operand
    return this
  }

  subtract(operand: number) {
    this.value -= operand
    return this
  }

}

var x = new Calculator(10)
  .add(5)
  .result()
```

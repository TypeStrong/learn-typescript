// Classes are an ES6 addition which provides a familiar (from OO languages) short hand for creating functions populated with the prototype (methods in the class), static properties, and the constructor function, as well as helpers like `super` for calling to the super class.
// It also makes type information for classes much simpler to express in TypeScript.

interface Implementation {
  bar: string
}

class Clazz implements Implementation {
  bar: string // Omitting this will error, since implementation would be incorrect.

  // Only child classes can access `foo`. Note that this _does not_ modify the JS output, so JavaScript users could still access this freely.
  protected foo: string

  // Use the `public` modifier to automatically set `this.myName = myName`. Only available in constructors, can also be `private` or `protected`.
  constructor (public myName: string) {
    // Type `foo` must be specified before usage.
    this.foo = myName.toUpperCase()
  }

  // Methods are specified using this syntax of `<name> (<parameters>) { <body> }`.
  method () {
    return true
  }

  // You can also use getters as setters.
  get value () {
    return this.foo
  }

  // Static methods are available on the constructor function.
  static method () {
    return 'wow, cool'
  }
}

var c = new Clazz('hello')

c.myName //=> "hello".
// c.foo //=> Error: Property 'foo' is protected and only accessible within class 'Clazz' and its subclasses.
c.value //=> "HELLO".

Clazz.method() //=> "wow, cool".

// ES6 extending classes. All this continues working when targeting ES5 and ES3 too!
class SubClazz extends Clazz {

  constructor () {
    super('wow') // `super` calls the constructor we inherited from with the current context. In this case, it's `Clazz`.

    console.log(this.foo) // We can access `foo` too!
  }

}

// Following the ES6 spec for classes, subclasses can access superclass static methods.
SubClazz.method() //=> "wow, cool".

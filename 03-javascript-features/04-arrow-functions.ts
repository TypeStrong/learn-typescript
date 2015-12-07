// Arrow functions are normal JavaScript functions, except they keep the `this` context during execution. Extremely useful inside class methods that call to other async functions.

class Foo {

  someMethod (arr: string[]) {
    arr.forEach(x => this.log(x))

    // Usually you'd have to `var self = this` and use `self.log(x)` in the callback, which is a much bigger function expression.
  }

  log (value: string) {
    console.log(value)
  }

}

// Arrow functions can follow these syntaxes:
// * `<parameter> => <expression>`
// * `(<parameters?>) => <expression>`
// * `<parameter> => { <body> }`
// * `(<parameters?>) => { <body> }`
// When used with an expression, the expression is automatically "returned".

const help = () => console.log('Help me, please!')

help() //=> "Help me, please!"

// Tip: Use the arrow function with libraries that use `this`, such as anything related to events in the browsers (jQuery, Angular, React).

let React: any

class ReactElement {

  doAThing () {}

  render () {
    return React.createElement('div', {
      // Using a function is much cheaper than binding.
      onClick: () => this.doAThing()
    })
  }

}

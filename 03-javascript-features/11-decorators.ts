// Decorators are an experimental feature with support in TypeScript. It allows us to wrap methods and classes quickly using a different syntax to what we're used to.

function debug (target: any, name: string, descriptor: any) {
  // Wrap the descriptor function.
  descriptor.value = function (...args: any[]) {
    console.log.call(console, 'Called with:', ...args)
  }
}

class MyClass {

  @debug
  method (name: string, isHappy: boolean) {
    // Do stuff...
  }

}

new MyClass().method('Blake', true)

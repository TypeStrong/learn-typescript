# Project

In this chapter, we're going to briefly touch on various aspects of a TypeScript project.

## `tsconfig.json`

This is our starting point. It allows us set up the compiler in a declarative fashion which we can share with our co-workers. When you execute `tsc`, it will resolve `tsconfig.json` and use it to set up the compiler.

[Continue reading...](01-tsconfig)

## Declaration Spaces

TypeScript handles type declarations and variable declarations in the same file, but this can be confusing at first. What you need to know is that types and variables can not mix in code. If you try it, you'll probably get an error saying that it "cannot find name".

Interfaces and types produce type declarations only, which can not be mixed into code. However, classes generate both at the same time - they provide an interface and runtime code for the class name. To capture the type of a variable, we come back to the `typeof` operator covered in Chapter 2.

## Modules

Any file you create and use will be considered a "global" module, until you use `import` or `export`. Using these constructs switches the file to be a "file" module that will work with your module system output. This is some handy information to know when it comes later to writing definition files.

```
import { foo } from './foo'
```

## Namespaces

Namespaces allow TypeScript to replicate a common JavaScript practice, more commonly used when no module system exists. It wraps all the code  inside the namespace into a new scope and turns the namespace into code that merges at runtime.

```ts
namespace App {

  export function helloWorld () {
    return 'hello world!'
  }

}

App.helloWorld()
```

This can be handy when adding properties to a function too, since it merges namespaces when they already exist.

```ts
function doThing () {
  return 'thing thing'
}

namespace doThing {
  export function log (message: string) {
    console.log(message)
  }
}

doThing.log('Pretty common use-case!')
```

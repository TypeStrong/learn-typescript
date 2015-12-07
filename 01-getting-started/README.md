# Getting Started

TypeScript is a compile-to-JS language. All code you write, in TypeScript, will eventually be executed by a JavaScript runtime. This could be a browser or server environment, such as Chrome or Node.js. To get the most out of using TypeScript, you'll want a few things:

* A TypeScript compatible IDE ([Atom](https://github.com/TypeStrong/atom-typescript), VSCode, [Sublime Text](https://github.com/Microsoft/TypeScript-Sublime-Plugin) and others!)
* Some build pipeline for compilation (E.g. Using the compiler itself - `npm install typescript`)

After this, you should create a `tsconfig.json` file to manage the TypeScript project. This file can be empty, for now, which will add all TypeScript files in the directory to the compiler.

## TypeScript Goals

TypeScript has a page on [design goals](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals) which essentially boil down to the following points:

* Provide a _structural_ type system for JavaScript
* Support current and future ECMAScript

## Why?

Types help make programs easier to understand, and improve the overall code quality. Specifically:

* Types improve the ability to refactor. The compiler will catch errors before they fail at runtime.
* Types are a great way to expose documentation. The expected interfaces are clearly defined outside of the implementation.

Some type systems are known to be unnecessarily superfluous. TypeScript, however, aims to keep this barrier as low as possible. Here's just some ways this is happens:

* JavaScript is TypeScript. That's right, you can rename your `.js` file to `.ts` and it will "just work". TypeScript is strictly a superset of JavaScript.
* Types can be implicit. TypeScript will infer the type information from the value when initializing a variable, whenever possible.
* Types can also be explicit. Using a postfix annotation syntax, you can specify the types of a variable upon initialization. E.g. `var x: number`.
* Types are structural. This is important for JavaScript, as it prevents unnecessary verbosity to introduce types and maintains compatibility with JavaScript practices.
* Type errors don't prevent JavaScript from emitting. If you're trying to migrate to TypeScript you might run into type errors. This doesn't block the JavaScript from being emitted though.
* Ambient types. One of the goals for TypeScript is to work with existing JavaScript. TypeScript does this through a declaration file, which we'll learn more about later.

## Future JavaScript Today

TypeScript supports a number of upcoming JavaScript features (ES6, ES7) that some JavaScript engines are only just starting to support. For example, `class`, `const` and `=>`.

## TypeScript Definitions

As mentioned earlier, TypeScript provides a way of writing declarations. These are `.d.ts` files, and they can be emitted by the TypeScript compiler alongside JavaScript files. This provides a mechanism for JavaScript and the TypeScript type system to be separated. This is a huge benefit for us developers, as it allows the community to provide type definitions for existing JavaScript that we can then consume in a type safe manner and it allows us to publish our TypeScript as JavaScript with an opt-in type system for fellow TypeScript developers to consume safely.

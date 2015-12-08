# TypeScript Workshop

> The complete workshop for picking up TypeScript.

_This workshop is a mirror of the current TypeScript stable release. If something is missing, create an issue and it will be included ASAP._

## Getting Started

You've cloned this repo, great! Now `npm install` and open your IDE of choice (I use Atom and [`atom-typescript`](https://github.com/TypeStrong/atom-typescript)). At any point looking through these, I recommend you play around and take a look at `output/` (build with `npm run build`) for the JavaScript output.

## Lessons

1. [Getting Started](01-getting-started)
2. [Type System Introduction](02-type-system-introduction)
3. [JavaScript Features (with TypeScript)](03-javascript-features)
4. [Project](04-project)
5. [Diving Deeper](05-diving-deeper)
6. [Integration](06-integration)

## Resources

* [StackOverflow](https://stackoverflow.com/tags/typescript)
* [TypeStrong](https://github.com/TypeStrong/)
* [Typings](https://github.com/typings)
* [DefinitelyTyped](https://github.com/DefinitelyTyped/)
* [TypeScript on GitHub](https://github.com/Microsoft/TypeScript)

## Tips

**Always** use `let` and `const` over `var`, with `const` preferred over `let`. TypeScript will handle this properly and the compiler will error if `const` is being reassigned. `const` and `let` are introduced in Chapter 3.

## References

* [TypeScript What's New](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript)
* [TypeScript Handbook](http://www.typescriptlang.org/Handbook)
* [TypeScript Book](https://basarat.gitbooks.io/typescript/content/index.html)

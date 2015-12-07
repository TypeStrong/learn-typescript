# Typings

[Typings](https://github.com/typings/typings) is a similar project to DefinitelyTyped and TSD, but aims to solve all the pitfalls that exist in that ecosystem. Theoretically, everything in DefinitelyTyped is a subset of Typings.

The primary differences between DefinitelyTyped and Typings is that DefinitelyTyped creates one huge repo with everything and all the definitions are ambient module declarations. This worked well at a smaller scale, but it's fractured at the current scale. The maintainers must watch for issues and pull requests for over 1400 packages, even though they might only be maintaining 5 or 10 themselves. The issues around ambient module declarations are also well known, as it inhibits your ability to use the definitions inside of your packages TypeScript module automatically as it can (and will) conflict with other versions of the same ambient declaration.

Typings is a similar project, but goes about things in the reverse way. Instead of using ambient module declarations, everything is an external module declaration. This allows us to write the declaration file as if it's part of the repo, and the [`typings`] CLI will compile the ambient declarations for us. Also, instead of one giant repo, all typings are distributed over the entire internet and referenced using a public registry. This solves the maintainership question, since you only need to subscribe to repos that you maintain and never know about all the other issues.

Let's give it a go:

```
npm i -g typings
typings i chalk -S
```

**Note:** The registry used by `typings` is _much_ smaller than DefinitelyTyped right now. Very soon, `--source dt` will be supported in `typings` so you can install anything available on DefinitelyTyped while typings slowly migrate to the external module declaration format.

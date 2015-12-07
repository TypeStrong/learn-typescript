# Ambient Declarations

Ambient declaration files are just another `.d.ts` file, but they don't define any `import` or `export`. Remember back to when we discovered excluding `import` and `export` creates a "global" module. It's the same for `.d.ts` files, so if we omit `import` and `export` from the top level we can use it to document globals using the TypeScript type system.

This is actually how `lib.d.ts` works! Using the same concept, the community is able to maintain type definitions for other modules or environments, such as [`node.d.ts`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts). You just have to be aware that any type information you put in this file **will** be global to your project.

Occasionally you do need to write your own global typings for things that weren't included using TypeScript's `lib.d.ts` or the community maintained definitions. In this case, you can create your own file (I recommend `globals.d.ts`) and reference it using `files` in `tsconfig.json`. Now you're types will work perfectly.

Of course, the final use-case for ambient declarations is third-party module typings. There's over [200,000](http://www.modulecounts.com/) modules on NPM! That's a lot to type. Let's just implement the type definition for something simple, like [`arrify.d.ts`](arrify.d.ts).

Using `declare module "name"` creates that modules typings within the current project. It allows us to import `name` later on, which turns out to be a huge part of NodeJS development, or anyone using CommonJS for that fact.

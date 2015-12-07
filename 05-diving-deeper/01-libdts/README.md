# `lib.d.ts`

TypeScript ships with a declaration file called `lib.d.ts`. By default, this is included in the project compilation unless you specify `noLib` with the compiler options. The purpose of this file is to declare the types of everything that already exists in JavaScript. [Take a look at the file in TypeScript](https://github.com/Microsoft/TypeScript/blob/master/lib/lib.d.ts).

You should be aware that `lib.d.ts` comes with all the browser APIs included too. If you're writing TypeScript for node, you might want to specify `noLib` and include [`lib.core.d.ts`](https://github.com/Microsoft/TypeScript/blob/master/lib/lib.core.d.ts) instead.

Since TypeScript interfaces are open ended (meaning we can merge more information with them) we can add more types to the global interface. This might be required if you're extending the global interfaces at runtime.

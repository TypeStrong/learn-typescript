# `.d.ts` Files

Files that end in `.d.ts` are known as TypeScript definition files. They are like TypeScript files, except they are **only** the type declaration space side of things. If you were to, theoretically, combine a complete `.d.ts` file with the `.js` runtime, you'd end up with a JavaScript file.

This is a powerful concept, since it enables us to separate the type system from our runtime implementation. One way this helps us that we can emit JavaScript for all the current users out there (E.g. NPM and NodeJS), while providing definition files that mirror the runtime for TypeScript users to consume. The other way this helps us, is that we can write type interfaces completely separate from runtime details - which allows us to type existing JavaScript (E.g. Node, libraries on NPM, etc).

Take a look at [`index.ts`](index.ts), which imports [`foo.js`](foo.js). However, without the TypeScript declaration it wouldn't have any types and wouldn't be found by the TypeScript compiler. If you look at [`foo.d.ts`](foo.d.ts), you'll see how we implemented the definition (as simple as just exporting the type signatures without implementation details).

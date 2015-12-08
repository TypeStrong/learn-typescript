# Integration

TypeScript can be compiled using the CLI - `tsc`. However, it's often desirable to package the TypeScript with an existing build system and tooling. In this chapter, we're going to look at a few solutions that make this possible.

## Node

It is recommended that you compile your TypeScript to JavaScript before ever executing with node. There are a few cases, during experimentation or demos, for example, where you might want to compile and execute TypeScript inline. The biggest use-case, personally, is for executing tests where it's difficult or unfeasible to copy fixtures around to support the compilation output. This is common when tests are inline with code.

To solve this, there's a package called [`ts-node`](https://github.com/TypeStrong/ts-node):

```sh
npm install -g ts-node
npm install -g typescript # Compiler used by `ts-node`.

ts-node script.ts
```

If you're using Node and using native APIs, the [node typings](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/node) will come in handy!

## Webpack

If you're using Webpack, I recommend using [`ts-loader`](https://github.com/TypeStrong/ts-loader). To add this to your Webpack project, you **must** as `.ts` (and/or `.tsx`) to your resolve extensions, as well as `ts` to your module loaders:

```js
module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as resolvable extensions.
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts' }
    ]
  }
}
```

`ts-loader` will loads its configuration from `tsconfig.json`. You can also pass options, such as using a custom compiler, through the query string.

## Browserify

If you're more of a Browserify user, I recommend [`tsify`](https://github.com/TypeStrong/tsify). There's no additional configuration is required here, except using it as a plugin (`browserify main.ts -p [ tsify --noImplicitAny ]`) in Browserify.

## Notes

`ts-node`, `ts-loader` and `tsify` all use `commonjs` modules. TypeScript compilation generally has to happen before other plugins, since TypeScript's syntax can not be parsed by a JavaScript parser.

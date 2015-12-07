# `tsconfig.json`

This is a brief introduction to the `tsconfig.json` file. This file is, most likely, how you'll be setting up all your future TypeScript projects. It enables the ability to specify configuration options relative to this file which will be loaded by our compiler, and third-party tools.

## Empty `tsconfig.json`

An empty `tsconfig.json` is valid. By default, this will set up the default compiler options and specify `files` to be every TypeScript file in the current directory.

## Files

Fine-tuning this file, we run into the `files` array. This property is used to specify all the entry points and additional files needed for compilation. Here's an example from [`typings`](https://github.com/typings/typings/blob/366a1bfdd6865e154b7dbc0a6fa1e14c1b5c01e4/tsconfig.json#L12-L55).

```json
{
  "files": [
    "src/index.ts",
    "typings/main.d.ts"
  ]
}
```

## Exclude

Sometimes you want, or need, to compile everything in the project. Remember that when we had the empty `tsconfig.json`, that's what happened. Well, that's what happens when `files` is omitted. In this case, we can fine-tune the selection by excluding files and directories with the `exclude` property.

```json
{
  "exclude": {
    "node_modules"
  }
}
```

An example of this in practice is at the root of this workshop.

**Note:** When `files` are specified, `exclude` is ignored. Also, files referenced by included files can not be excluded using this construct.

## Compiler Options

This is the crux of our configuration, though throughout most projects the compiler options are likely to look very similar. Here's some of the interesting options you can specify:

* `noImplicitAny` - My favorite, the compiler will warn on implied uses of "any".
* `sourceMap` - Generates `.js.map` files, useful in environments where you need to map stack traces back to the original code.
* `declaration` - Generates `.d.ts` files alongside your JavaScript. Very helpful for publishing your code and allowing consumers to have strong typing with it.
* `module` - Specify the module code generation format: `commonjs`, `amd`, `system`, `umd` or `es6`.
* `noLib` - Excludes the default library files (`lib.d.ts`).
* `outDir` - Write all output to a separate directory.
* `outFile` - Concatenate and emit output to single file.
* `target` - Specify the ECMAScript target version: `es3`, `es5` or `es6`.
* `moduleResolution` - Currently `node` or `classic`, using `node` will attempt to resolve using `node_modules`.
* `jsx` - Specify the JSX code generation behavior: `preserve` or `react`.

## Comments

Comments are allowed in `tsconfig.json` from TypeScript 1.8+.

```json
{
  "compilerOptions": {
    /* Output directory can be looked into for reference */
    "outDir": "output"
  }
}
```

## Further Reading

There's a user-land implementation of the `tsconfig.json` reader available called [tsconfig](https://github.com/TypeStrong/tsconfig), and the [TypeScript wiki](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json) provides a lot more details including a JSON schema for validation.

# TSD and DefinitelyTyped

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) is a huge community project to type existing NPM packages and improve type re-use. Instead of having to write definitions yourself for the 1400 packages typed in DefinitelyTyped, you can just copy and paste them into your own project.

There's also a tool called [TSD](https://github.com/DefinitelyTyped/tsd) which allows you to install from DefinitelyTyped. Using `tsd install node --save` would install `node/node.d.ts` from DefinitelyTyped, and write the commit to a file called `tsd.json`.

Let's give it a go:

```sh
npm i -g tsd
tsd install node --save
```

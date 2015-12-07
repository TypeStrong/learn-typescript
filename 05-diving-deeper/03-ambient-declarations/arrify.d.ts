declare module "arrify" {
  function arrify <T> (array: T | T[]): T[]

  export = arrify
}

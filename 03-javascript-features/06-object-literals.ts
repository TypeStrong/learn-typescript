// Object literals also get some enhancements, along the lines with class, in ES6.

const obj = {
  get hello () {
    return `${this.phrase} ${this.name}!`
  },
  set hello (phrase: string) {
    this.phrase = phrase
  },
  add (a: number, b: number) {
    return a + b
  },
  thisIsHandySometimes: () => 'echo',
  phrase: 'Hello',
  name: 'Blake'
}

console.log(obj.hello) //=> "Hello Blake!"
console.log(obj.add(1, 2)) //=> 3

// Using a `setter`.
obj.hello = 'G\'day'

console.log(obj.hello) //=> "G'day Blake!"

console.log(obj.thisIsHandySometimes()) //=> "echo"

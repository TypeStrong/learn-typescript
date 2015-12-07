// Default and rest parameters are new ES6 features that make it easier to overload our functions.

// Rest parameters must always be the last parameter defined.
function add (...numbers: number[]) {
  return numbers.reduce(function (sum, number) {
    return sum + number
  })
}

// The rest parameter will handle any number of arguments we pass to it.
console.log(add(1, 2, 3, 4, 5))

interface MultiDimensionArray <T> {
  [key: number]: T | MultiDimensionArray<T>
  length: number
}

function flatten <T> (array: MultiDimensionArray<T>, result: T[] = []): T[] {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i] as T[], result)
    } else {
      result.push(array[i] as T)
    }
  }

  return result
}

// Notice we are omitting the second argument, it's inherently optional when a default parameter is used.
console.log(flatten([1, [2, 3, [4, 5], 6, 7], 8])) //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// But we can set it if we wish.
console.log(flatten([[[[[[10]]]]]], [1, 5])) //=> [ 1, 5, 10 ]

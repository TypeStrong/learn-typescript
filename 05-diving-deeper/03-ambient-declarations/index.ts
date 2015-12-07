/// <reference path="arrify.d.ts" />

import arrify = require('arrify')

const result = arrify('hello world') // `typeof result` is `string[]`!

// boolean
let isCompleted: boolean = false
isCompleted = true

// number
const decimal: number = 1.2
const integer: number = 6
const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744

// string
const string: string = 'Some string'
const sentence: string = `Some ${string}`

// null & undefined
typeof null // object
typeof undefined // undefined
const u: undefined = undefined
const n: null = null

// void - type missing
const greetUser = (): void => { // no return has no type
  alert('Hello, user')
}

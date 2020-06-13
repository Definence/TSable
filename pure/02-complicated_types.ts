// arrays
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3] // generic type

// tupple
let x: [number, string, number, boolean]
x = [1, "string", 1, true]
let y: [number, string] = [2, 'string'] // one line

// any
let z1: any[] = [1, 'string', true]
let z2: Array<any> = [1, 'str', true]
let z3: [any, any, string] = [1, true, 'string']
let z4: any = 'Some value'
    z4 = true
    z4 = 1
    z4 = {}

// enum
enum Directions {
  Up,
  Down,
  Left,
  Right
}

Directions.Up     // 0
Directions.Down   // 1
Directions.Left   // 2
Directions.Right  // 3

enum Directions2 {
  Up = 2,
  Down = 4,
  Left = 6,
  Right
}

Directions.Up     // 2
Directions.Down   // 4
Directions.Left   // 6
Directions.Right  // 7

// never - no result
const msg: string = 'hello'
const error = (msg: string): never => {
  throw new Error(msg)
}
const infiniteLoop = (): never => {
  while(true) {
  }
}

// object
const create = (o: object): void => {}
create({})

// multiple types
let a: boolean | number | string = true
    a = 1
    a = 'dsfssf'

// type
type Name = string
let q: Name = 'string'

let user1: any = {
  a: '1',
  b: '2'
}
user1 = 'string' // bad way

type user2Type = { a: string, b: string, c: boolean }
let user2: user2Type = {
  a: '1',
  b: '2',
  c: true
}
let user3: user2Type = {
  a: '1',
  b: '2',
  c: true
}

// 2 objects with almost same props
type commonType = { a: number, b: number, first?: [], second?: {}, third?: () => number }

const first: commonType = {
  a: 1,
  b: 2,
  first: []
}
const second: commonType = {
  a: 1,
  b: 2,
  second: {}
}
const third: commonType = {
  a: 1,
  b: 2,
  third: () => 1
}

// interfaces
interface User {
  readonly unchangable?: string,
  name: string,
  age?: number,
  getPass?(): string,
  [propName: string]: any // will allow to add unregistered props
}

type RestProps = {
  nick: string
}

const user: User = {
  name: 'Name',
  a: 1 // not controlled because of [propName: string]: any
}

class Person implements User, RestProps { // interface usage will not result in an error of unregistered props
  name: string = 'Yevhen'
  age: number = 31
  nick: string = '111'
  getPass() {
    return 'Password'
  }
}

interface a {
  a: number
}
interface b {
  b: number
}
interface c {
  c: number
}
interface ab extends a, b {}

class Letters implements ab, c {
  a: number
  b: number
  c: number

  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }
}

new Letters(1, 2, 3)

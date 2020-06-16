// possible issue
let getter = (data: any): any => data
getter(10).length // undefined
getter('test').length // 4

// generic
// es 6
let getterES6 = <T>(data: T): T => data
// es 5
function getterES5<T>(data: T): T {
  return data
}

// getterES6(10).length // will result in an error
getterES6('test').length // 4

// define type in function calling
// getterES6<number>(10).length // will result in an error
getterES6<string>('test').length // 4

let list2: Array<number> = [1, 2, 3] // array generic type

// class usage
class User<T> {
  constructor(public name: T, public age: T) {}

  public getPass(): string {
    return `${this.name}${this.age}`
  }
}
const user1 = new User('name', '21') // string string
const user2 = new User(111, 222) // number number

class User2<T, K> {
  constructor(public name: T, public age: K) { }

  public getPass(): string {
    return `${this.name}${this.age}`
  }
}

const user3 = new User2('string', 222) // string number


interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}

// extendable generic ??? сумнівно
class User3 <T, K extends number> {
  constructor(public name: T, public age: K ) {}
  public getPass(): number {
    return this.age ** 2
  }
}

const user31 = new User3('Name', 23)
const user32 = new User3(21, 23)
const user33 = new User3('21', '23')

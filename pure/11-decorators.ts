// class decorator
const logClass = (constructor: Function): void => {
  console.log(constructor) // result of call: class User {}
}

@logClass
class User {
  constructor(public name: string, public age: number) { }
  public getPass(): string {
    return `${this.name}${this.age}`
  }
}

// property decorator
const logProperty = (
  target: Object,
  propertyKey: string | symbol
): void => {
  console.log(propertyKey) // result of call: secret
}

class User2 {
  @logProperty
  secret: number

  constructor(public name: string, public age: number, secret: number) {
    this.secret = secret
  }
  public getPass(): string {
    return `${this.name}${this.age}`
  }
}

// method decorator
const logMethod = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
): void => {
  console.log(propertyKey) // result of call: getPass
}

class User3 {
  constructor(public name: string, public age: number) {}
  @logMethod // apply decorator for a method
  public getPass(): string {
    return `${this.name}${this.age}`
  }
}

// get/set decorators
const logSet = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
): void => {
  console.log(propertyKey) // result of call: myAge
}

class User4 {
  constructor(public name: string, public age: number) { }
  @logMethod // apply decorator for a method
  set myAge(age: number) {
    this.age = age
  }
}

// factory decorator
// simple :)
function factory(value: any) {
  return function(target: any) {
    console.log(target)
  }
}
// example
const enumerable = (value: boolean) => {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.enumerable = value
  }
}
class User5 {
  constructor(public name: string, public age: number) {}
  @enumerable(false) // changes enumerable to false
  public getPass(): string {
    return `${this.name}${this.age}`
  }
}

// decorators composition
const first = () => {
  console.log('first() starting')
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.log('first() called')
  }
}
const second = () => {
  console.log('second() starting')
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.log('second() called')
  }
}
class User6 {
  constructor(public name: string, public age: number) { }
  @first()
  @second()
  public getPass(): string {
    return `${this.name}${this.age}`
  }
}
// first() starting
// second() starting
// second() called
// first() called

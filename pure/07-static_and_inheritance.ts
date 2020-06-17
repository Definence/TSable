// static
class User3 {
  static secret: number = 12345
  protected nickName: string = 'Nick'

  constructor(
    public name: string,
    public age: number
  ) {}

  getPass(): string {
    return `${User3.secret}${this.name}`
  }
}
const user = new User3('Yavhen', 31)
User3.secret // 12345
user.getPass() // 12345Yavhen

// inheritance
class Yavhen extends User3 {
  name: string = 'Yavhen'

  constructor(age: number) { // redefines constructor to avoid args error
    super(name, age)
  }

  getPass(): string {
    return `${User3.secret}${this.name}${this.age}${this.nickName}`
  }
}

const yauhen = new Yavhen(30)
yauhen.getPass() // 12345Yavhen30Nick

// abstract class helps how should inherited classes look like
abstract class UserBehaviour { // can't create an instance
  constructor(
    public name: string,
    public age: number,
    public nickName?: number,
  ) { }

  greet(): void {
    console.log(this.name)
  }
  abstract getPass(): string // if method not implemented in inherited it will result an error
}

class AbstractYavhen extends UserBehaviour {
  name: string = 'Yavhen'

  constructor(age: number) { // redefines constructor to avoid args error
    super(name, age)
  }
  getPass(): string {
    return `${User3.secret}${this.name}${this.age}${this.nickName}`
  }
}

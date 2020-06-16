class User {
  public name: string // piblic
  private age: number // visible within class
  protected nickName: string // visible within inherited classes
  readonly password: string // readonly
  gender: string = 'male' // default value - not assignable

  constructor(name: string, age: number, nickName: string, password: string) {
    this.name = name
    this.age = age
    this.nickName = nickName
    this.password = password
  }

  getKey(): string {
    return `${this.name}-${this.nickName}-${this.age}`
  }

  // change property
  setAge(age: number) {
    this.age = age
  }
  set setMyAge(age: number) {
    this.age = age
  }
}

const yavhen = new User('Yavhen', 31, 'webDev', 'some password')
yavhen.name // public access
yavhen.setAge(30)

// yavhen.age // error: private are accessible within class
// yavhen.age // error: accessible only within its subsclusses
// yavhen.password = 444 // error: read-only
yavhen.getKey() //

// shorter variant
class User2 {
  constructor(
    public name: string,
    private age: number,
    protected nickName: string,
    readonly password: string,
    public gender: string = 'male'
  ) {}
}
const yavhen2 = new User2('Yavhen', 31, 'webDev', 'some password')

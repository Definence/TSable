// multiple as arg types
const createPassword1 = (name: string, age: number | string): string => `${name}${age}`

createPassword1('Jack', 31)
createPassword1('Jack', '31')

// optional arg
const createPassword2 = (name: string, age?: number) : string => `${name}${age}`
createPassword2('Jack')

// rest
const createSkills = (name: string, ...skills: string[]): string =>
  `${name}, my skills are ${skills.join(', ')}`
createSkills('John', 'React', 'Redux', 'RoR', 'Postgres')

// no return
const greetUser = (): void => {
  alert('Something')
}

// raises error or infinite loop in func
const raise = (e: string): never => {
  throw e
}

// func var type
let func: (arg: string) => void // let func
function oldFunc(arg): void {
  alert(arg)
}
func = oldFunc

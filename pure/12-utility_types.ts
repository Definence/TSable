// Readonly
interface User {
  name: string
}
const user: Readonly<User> = {
  name: 'Yavhen'
}
// user.name = 'Max' // will result in an error

// Required
interface Props {
  a?: number,
  b?: string
}
const obj: Props = { a: 5 }
// const reqObj: Required<Props> = { a: 5 } // b missing error

// Record
interface PageInfo {
  title: string
}
type Page = 'home' | 'about' | 'contact'
const x: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' }
}

// Pick
interface Todo {
  title: string,
  description: string,
  completed: boolean
}
type TodoPreview = Pick<Todo, 'title' | 'completed'> // selects some types from the interface
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}

// Omit - opposite to Pick
interface OmitTodo {
  title: string,
  description: string,
  completed: boolean
}
type OmitTodoPreview = Omit<Todo, 'description'> // removes types from the interface
const omitTodo: OmitTodoPreview = {
  title: 'Clean room',
  completed: false
}

// Exclude
// exclude second args types
type t0 = Exclude<'a' | 'b' | 'c', 'a'> // b | c
type t1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // c
type t2 = Exclude<string | number | (() => void), Function> // string / number

// Extract - opposite to exclude
type t3 = Extract<'a' | 'b' | 'c', 'a' | 'f'> // a
type t4 = Extract<string | number | (() => void), Function> // () => void

// NonNullable
type t5 = NonNullable<string | number | undefined> // string | number
type t6 = NonNullable<string[] | null | undefined> // string[]

// ReturnType
declare function f1(): { a: number, b: string }

type rt0 = ReturnType<() => string> // string
type rt1 = ReturnType<(s: string) => void> // void
type rt2 = ReturnType<(<T>() => T)> // {}
type rt3 = ReturnType<(<T extends X, X extends number[]>() => T)> // number[]
type rt4 = ReturnType<typeof f1> // { a: number, b: string }
type rt5 = ReturnType<any> // any
type rt6 = ReturnType<never> // any

// InstanceType
class C {
  x = 0
  y = 0
}
type it0 = InstanceType<typeof C> // C
type it1 = InstanceType<any> // any
type it2 = InstanceType<never> // any

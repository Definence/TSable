import React, {
  useState,
  useRef,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useEffect,
} from 'react'

export default () => {
  // useState
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState<number | undefined>(undefined)
  const [value3, setValue3] = useState<Array<number>>([])

  interface IUser {
    name: string,
    age?: number,
  }
  const [value4, setValue4] = useState<IUser>({ name: 'Yauhen' })

  // useRef
  const ref1 = useRef<HTMLElement>(null!) // react handle
  const ref2 = useRef<HTMLElement | null>(null) // manual handle

  // useContext
  interface ITheme {
    backgroundColor: string,
    color: string,
  }
  const ThemeContext = createContext<ITheme>({
    backgroundColor: 'black',
    color: 'white',
  })
  const themeContext = useContext<ITheme>(ThemeContext)

  // Callback
  // Повертає мемоізовану функцію зворотнього виклику
  let [a,b] = [1,2]
  const memoizedCallback = useCallback(() => { a + b }, [a, b])

  // Memo
  // Повертає мемоізоване значення.
  const memoizedValue = useMemo(()=> ( a + b ), [a, b])

  // useEffect - not requires typization
  useEffect(() => {}, [])
}

// useReducer
type State = {
  count: number,
}
type Action = {
  type: 'increment' | 'decrement',
}
const initialState = { count: 0 }
function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}

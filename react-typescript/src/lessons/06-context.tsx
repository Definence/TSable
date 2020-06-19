import React, { Component } from 'react'

interface IContext {
  isAuth: boolean,
  toggleAuth: () => void
}

const AuthContext = React.createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {}
})

// class component
class Login extends Component {
  static contextType = AuthContext
  context!: React.ContextType<typeof AuthContext>

  render() {
    const { toggleAuth, isAuth } = this.context
    return (
      <button onClick={toggleAuth}>
        {isAuth ? 'Login' : 'Logout'}
      </button>
    )
  }
}

// functional component
const Profile: React.FC = (): React.ReactElement => (
  <AuthContext.Consumer>
    {({ isAuth }: IContext) => (
      <h1>{isAuth ? 'You are logged in' : 'Please login'}</h1>
    )}
  </AuthContext.Consumer>
)

class Context extends Component<{}, { isAuth: boolean }> {
  readonly state = { isAuth: false }

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({ isAuth: !isAuth }))
  }

  render() {
    const { isAuth } = this.state
    const context: IContext = { isAuth, toggleAuth: this.toggleAuth }

    return (
      <AuthContext.Provider value={context}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    )
  }
}

export default Context

import React, { useState } from 'react'

interface InjectedProps {
  toggleStatus: Boolean,
  toggle: () => void,
}

const Button = ({ primTitle, secTitle, toggle, toggleStatus }: any) => (
  <button onClick={toggle}>
    {toggleStatus ? primTitle : secTitle}
  </button>
)

const withToggle = <T extends InjectedProps>(PassedComponent: React.ComponentType<T>) => {
  return (props: T) => {
    const [toggleStatus, toggle] = useState(false)

    return (
      <PassedComponent
        {...props as T}
        toggle={() => toggle(!toggleStatus)}
        toggleStatus={toggleStatus}
      />
    )
  }
}

// const withLoading = <T,>(Component: React.ComponentType<T>) => (props: T) => {
//   const [loading, toggleLoading] = useState(false)

//   return <Component loading={loading} toggleLoading={toggleLoading} {...props} />
// }

interface WithLoadingProps {
  loading: boolean,
}

const withLoading = <T,>(Component: React.ComponentType<T>) => (
  class WithLoading extends React.Component<T & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props
      return loading ? <h1>Loading</h1> : <Component {...props as T} />
    }
  }
)

const ToogleButton = withToggle(withLoading(Button))

const App: React.FC = () => <ToogleButton primTitle='Maint Title' secTitle='Additional Title' />

export default App

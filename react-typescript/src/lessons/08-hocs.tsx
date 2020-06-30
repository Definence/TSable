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

const ToogleButton = withToggle(Button)

const App: React.FC = () => <ToogleButton primTitle="Maint Title" secTitle="Additional Title" />

export default App

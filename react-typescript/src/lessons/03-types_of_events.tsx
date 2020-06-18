import React from 'react'

type Props = {
  header: string
}

type State = {
  readonly count: number // readonly from box
}

class Counter extends React.Component<Props, State> {
  static defaultProps: Props = {
    header: 'Count: '
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => { // or React.SyntheticEvent
    console.log(`X:${e.clientX} Y:${e.clientY}`)
    this.setState(({ count }) => ({
      count: ++count,
    }))
  }

  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget)
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitted')
  }

  handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
    console.log('coppied')
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
        <a href="#" onClick={this.handleClick}>Link</a>

        <form onSubmit={this.handleSubmit}>
          <label>
            Simple text:
            <input onCopy={this.handleCopy} onFocus={this.handleFocus} type="text" name='text' />
            <button type='submit'>Submit</button>
          </label>
        </form>
      </div>
    )
  }
}

export default Counter

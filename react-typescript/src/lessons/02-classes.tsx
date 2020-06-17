import React from 'react'

type Props = {
  header: string
}

type State = {
  readonly count: number // readonly from box
}

class Counter extends React.Component <Props, State> {
  static defaultProps: Props = {
    header: 'Count: '
  }

  static getDerivedStateFromProps(props: Props, state: State): State | null {
    return false ? { count: 2 } : null
  }

  componentDidMount(): void {}

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return true
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}

export default Counter

import React from 'react'

type TitleProps = {
  title: string,
  test?: boolean
}

// const Title: React.FC<{title: string}> = ({ title }) => <h1>{title}</h1>
// const Title: React.FC<TitleProps> = ({ title }) => <h1>{title}</h1>
const Title = ({ title, test }: TitleProps) => <h1>{title}{test}</h1>

const App = () => <Title title='Hello world!' />

export default App

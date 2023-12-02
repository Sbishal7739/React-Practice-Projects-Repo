import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Content />
    </>
  )
}

export default App

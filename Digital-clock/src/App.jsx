import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let time = new Date().toLocaleTimeString();

  let [cTime, setCtime] = useState(time);
  
  const updateTime = () =>{
    let time = new Date().toLocaleTimeString()
    setCtime(time)
  }

  setInterval(() => {
    updateTime()
  }, 1000);
  return (
    <>
      <h1>{cTime}</h1>
      
    </>
  )
}

export default App

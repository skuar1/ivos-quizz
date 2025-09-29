import { useState } from 'react'
import './App.module.css'
import Header from './components/header/index'

function App() {
  const [count, setCount] = useState("question")

  return (
    <>
    <Header></Header>
    </>
  )
}

export default App

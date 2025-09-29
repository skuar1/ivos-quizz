import { useState } from 'react'
import './App.module.css'
import Header from './components/header/index'
import QuestionCard from './components/QuestionCard'
import ScoreBoard from './components/ScoreBoard'

function App() {
  const [count, setCount] = useState("question")

  return (
    <>
    {/* organiza os returns em uma estrutura html  */}
    <Header></Header>
    <QuestionCard></QuestionCard>

    <h3>cards do relatório das questões</h3>
    <ScoreBoard></ScoreBoard>
    </>
  )
}

export default App

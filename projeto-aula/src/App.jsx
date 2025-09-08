import { useState } from 'react'
import './App.css'
import InfoJogador from './components/InfoJogador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <InfoJogador/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WordGame from './components/WordGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App-container'>
      <WordGame/>
      
    </div>
  )
}

export default App

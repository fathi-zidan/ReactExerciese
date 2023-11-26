import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box1 from './component/Box1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Box1/>
    </div>
  )
}

export default App

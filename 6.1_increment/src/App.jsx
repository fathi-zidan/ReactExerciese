import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './components/comp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
{/*      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Comp1/>

      
    </div>
  )
}

export default App

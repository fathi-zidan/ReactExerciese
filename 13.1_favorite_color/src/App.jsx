import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FF from './components/FavoriteColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App_container'>
      <FF/>
      
    </div>
  )
}

export default App

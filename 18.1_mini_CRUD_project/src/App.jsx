import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AvatarProvider } from './components/context/AvatarContext'
import DisplayAvatars from './components/DisplayAvatars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='App-container'>
      <AvatarProvider>
        <DisplayAvatars/>
      </AvatarProvider>
      
    </section>
  )
}

export default App

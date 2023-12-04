import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/buttons/Button'
import Form from './components/buttons/form/Form'
import Map from './components/pages/MapCardsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* <Button/>
      <Form/> */}
      <Map/>

    </div>
  )
}

export default App

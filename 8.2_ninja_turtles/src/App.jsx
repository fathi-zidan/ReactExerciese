import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TurtlesCard from './component/TurtlesCard'
import { data } from './data'
// console.log(data);

function App() {
  const [turtles, setTurtles] = useState(data);
  return (
    <>
      <TurtlesCard turtles={turtles} />

    </>
  )
}

export default App

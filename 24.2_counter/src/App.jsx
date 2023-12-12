import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  const {count,Increase,Decrease,Double,Divide} = useCounter(5);
  
  return (
    
      <div className='app'>
        <h1>Result : {count}</h1>
        <section className='App-btn'>
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
        <button onClick={Double}>double</button>
        <button onClick={Divide}>divide by 2</button>
        </section>

      </div>
        
    
  )
}

export default App

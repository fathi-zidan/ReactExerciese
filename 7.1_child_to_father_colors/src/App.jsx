import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BTN from './component/Comp'

function App() {
  // const [count, setCount] = useState(0)
  const [Color,setColor] = useState(null);

  const colors = ["blue","red","yellow"];

  function renderColor(color){
    setColor(color);
  } 

  return (
    <div className='container'>
      {colors.map((ele)=>(
        <BTN color ={ele} onClick = {renderColor}/>
      ))}
       {Color && <h2>Selected Color: {Color}</h2>}
      
    </div>
  )
}

export default App

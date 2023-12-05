import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grandfather from './components/Grandfather';
export const GiftContext = createContext();

function App() {
  const [gifts, setGifts] = useState([]);

  function addGift(gift) {
    setGifts((pre) => [...pre, gift]);
  }

  return (
    <div>
      <GiftContext.Provider value ={{gifts,addGift}}>
        <h1>App</h1>
        <Grandfather/>
      </GiftContext.Provider>

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TimerProvider } from './components/context/TimerContext'
import Timer from './components/Timer/Timer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext'
import InfoPage from './components/infoPage/InfoPage'
import { NavigationProvider } from './components/context/NavigationContext'
import AnimalPage from './components/animal/AnimalPage'
import ContactPage from './components/contactPage/ContactPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <section className='App-container'>
      <TimerProvider>
        <ThemeProvider>
        <NavigationProvider>
        {/* <Timer/> */}

        <InfoPage/>
        <AnimalPage/>
        <ContactPage/>
        </NavigationProvider>
        </ThemeProvider>
      </TimerProvider>
    </section>
  )
}

export default App

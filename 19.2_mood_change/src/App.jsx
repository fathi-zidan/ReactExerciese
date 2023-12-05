import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopMenu from './components/topMenu/Menu';
import HomePage from './components/homepage/Home';
import AboutPage from './components/aboutpage/About';
import { ThemeProvider } from './components/context/ThemeContext';

function App() {
 
  return (
    <div className='cc'>
      <ThemeProvider >
        <TopMenu />
        <HomePage/>
        <AboutPage/>
      </ThemeProvider>
    </div>
  )
}

export default App

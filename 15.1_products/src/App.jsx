import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import ProductInfo from './components/pages/ProductInfo'
import Error from './components/pages/Error'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Products/:id' element={<ProductInfo />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>

    </section>
  )
}

export default App

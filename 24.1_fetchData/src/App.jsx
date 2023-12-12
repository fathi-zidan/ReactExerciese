import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import useFetch from './hooks/useFetch'
const url = 'https://jsonplaceholder.typicode.com/albums'
const url2 = 'https://jsonplaceholder.typicode.com/photos'

function App() {
  const {data,loading} = useFetch(url);
  const {data:data2,loading:loading2} = useFetch(url2);
  return (
    <section className='app-container'>
      {loading && <div width="200" color="#4fa94d">Loading...</div>}
      <section className='sec1'>
      {data && data.map((ele,index)=>{
        return <div key={index} >{ele.title}</div>
      })}
      </section>
      <section className='sec1'>
      {/* {loading2 && <div width="200" color="#4fa94d">Loading2...</div>} */}
      {data2 && data2.map((ele,i)=>{
        return <div className='card' key={i}>
          <img src={ele.thumbnailUrl} alt={ele.title} />
          <h3>{ele.title}</h3>
        </div>
        
      })}
      </section>

     
    </section>
  )
}

export default App

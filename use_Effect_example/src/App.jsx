import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/'
  const [resourceType, setResourceType] = useState('posts');
  const [data, setData] = useState([]);
  // console.log(resourceType);

  useEffect(()=>{
    fetch(`${url}${resourceType}`)
    .then(res => res.json())
    .then(data => setData(data))

  },[resourceType])

  
  return (
    <div className='container'>
      <section className='btn_container'>
      <button onClick={()=>setResourceType('posts')} className='btn'>posts</button>
      <button onClick={()=>setResourceType('comments')} className='btn'>comments</button>
      <button onClick={()=>setResourceType('albums')} className='btn'>albums</button>
      <button onClick={()=>setResourceType('photos')} className='btn'>photos</button>
      </section>
      <section className='footer'>
      {data.map((item)=>{
        return <h2>{JSON.stringify(item)}</h2>
      })}
      </section>
    </div>
  )
}

export default App

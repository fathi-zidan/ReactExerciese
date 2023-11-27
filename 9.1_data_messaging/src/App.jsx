import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Names from './component/Name'
import { data } from './data'
import Card from './component/Card'

function App() {
  const allNames = (data) => {
    console.log(data.map((item) => item.name));
    return data.map((item) => item.name)
  }
  const birthdayBefore1990 = (data) => {
    return data.filter((item) => {
      const birthday = parseInt(item.birthday.split('-')[2]);
      return birthday < 1990;
    });
  }
  const [birthdayData, setBirthdayData] = useState(birthdayBefore1990(data));


  return (
    <>
      <Names names={allNames(data)} />
      <br></br>
      <Card birthday={birthdayData}/>

    </>
  )
}

export default App

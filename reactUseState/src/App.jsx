import './App.css'
import React, { useState } from 'react'; // useState import edildi

function App() {
      //* ilk değer  //* değiştirmek için kullanılır     
  const [ firstName, setFirstName] = useState("Batuhan"); //? başlangıç değeri 
 
  const [ names, setNames] = useState(["Batuhan", "Begüm", "Semiz"])

  const [ userInfo, setUserInfo] = useState({name : "batuhan", age : 20 , password : "123456"}) //* arry obje

  const [show , setShow] = useState(true)

  const [count , setCount] = useState(0)

  const handleChange = () => {
    setFirstName("begüm")
  }


  const arttir = () => {
    setCount(count + 1)
    
  }

  const azalt = () => {
    setCount(count - 1)
    if(count <= 0){
      setCount(0)
    }
    
  }
console.log("component render oldu")
  return (
    <>
      {firstName} 
      <button type='button' onClick={handleChange}>Değiştir</button>
      {names.map((name) => (
        <p key={name}> {name}</p>
      ))}

      {show ? <p>{userInfo.name} {userInfo.age} {userInfo.password}</p> : <div>
        Bilgiler gizli
      </div>}

      
      //? bir state değiştiği zaman o componentin tümünün yeniden render edilir

      <div>{count}</div>
      <div><button type='button' onClick={arttir}>Arttır</button></div>
      <div><button type='button' onClick={azalt}>azalt</button></div>
      
    </>
  )
}

export default App

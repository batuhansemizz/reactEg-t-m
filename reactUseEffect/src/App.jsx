import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("")
  const [latsName, setLatsName] = useState("")

  useEffect(() => { //* her zaman çalışır
    console.log("her zaman çalışır")
  })

  useEffect(() => { //* sadece bir kere çalışır
    console.log("sadece bir kere çalışır")
  }, [])

  useEffect(() => { //* firstName state değiştiğinde ve component render edildiğinde çalışır
    console.log("firstName ve lastnema state değiştiğinde ve component render edildiğinde çalışır")
  }, [firstName , latsName])

  /*useEffect(() => { //* lastName state değiştiğinde ve component render edildiğinde çalışır
    console.log(" lastName state değiştiğinde ve component render edildiğinde çalışır")
  }, [latsName])*/

  return (
    <>
      <div><button type='buttın' onClick={() => setFirstName("John")}>firstName</button></div>
      <div><button type='buttın' onClick={() => setLatsName("Doe")}>lastName</button></div>
    </>
  )
}

export default App

import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  
const {count , arttır , azalt} = useCounter
//* object distırakt
  return (
    <>
     <div>{count}</div>
     <button onClick={arttır} >Increase</button>
     <button onClick={azalt} >Decrease</button>
    </>
  )
}

export default App

import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { increment, decrement } from './redux/counterSlice'; // Bu import'u eklemeyi unutmayın

function App() {
  const value = useSelector((store) => store.counter.value)
  
  const dispatch = useDispatch(); //* counterSlice den gelen fonksiyonları kullanabilmek için useDispatch kullanıyoruz.
//* counterSlice den gelen fonksiyonları kullanıyoruz. 
  return (
    <>
     <div>
      <div>{value}</div>     
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
     </div>
    </>
  )
}

export default App

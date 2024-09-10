import './App.css'
import Login from './login'


export const users = [
  {
    username: 'admin',
    password: 'admin',
  },
  {
    username: 'admin',
    password: 'admin',
  }
];

//* export default yapınca tüm sayfayı dışa açıyoruz 
//* eğer bir objeyi veya arrayi dışa açmak istiyorsak export yapıp import edebiliriz
//* yukarıda bir örnek var
//* ama bu örneği function app in içersinde kullanamayız

function App() {
 
  return (
    <>
     <Login/>
     
    </>
  )
}

export default App

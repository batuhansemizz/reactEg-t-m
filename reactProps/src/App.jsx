import './App.css'
import Product from './product.jsx'
import Container from './Container.jsx'
function App() {
   const productName = "Buzdolabı"; //* bunu da props olarak gönderebiliriz
  return (
    <>
   { /* <Product productName="Gömlek" price={1500}/> 
     <Product productName="Ayakkabı" price={2500}/>
     <Product productName={productName} price={3500}/> */}
     <Container/> //* anne
       <Product/> //* çocuk
     <Container/>
    </>
  )
}

export default App

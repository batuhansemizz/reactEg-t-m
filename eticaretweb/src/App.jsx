import React from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
function App() {
  

  return (
    <>
      <PageContainer>
        <Header />
        <ProductsList />
      </PageContainer>
    </>
  )
}

export default App

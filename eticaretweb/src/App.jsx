import React from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import Loading from './components/Loading'
import Router from './config/Router'
function App() {
  

  return (
    <>
      <PageContainer>
        <Loading/>
        <Header />
        <Router />
        
      </PageContainer>
    </>
  )
}

export default App

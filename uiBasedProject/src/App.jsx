import React from 'react'
import './App.css'
import Header from './components/header'
import BodyArea from './components/bodyArea'

const App = () => {
  return (
      <>
     <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <BodyArea  />
      </div>
    </>
  )
}

export default App
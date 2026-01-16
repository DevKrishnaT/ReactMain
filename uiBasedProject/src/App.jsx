import React from 'react'
import './App.css'
import Header from './components/header'
import BodyArea from './components/bodyArea'

const App = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <BodyArea />

    </div>
  )
}

export default App
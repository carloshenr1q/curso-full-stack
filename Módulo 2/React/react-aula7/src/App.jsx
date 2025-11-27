import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputState from './components/InputState'
import InputRef from './components/InputRef'

function App() {
  return (
    <>
      <InputState />
      <InputRef />
    </>
  )
}

export default App

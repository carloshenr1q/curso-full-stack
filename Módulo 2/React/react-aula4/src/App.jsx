import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FormaDeBolo, FormaDeDoce} from './components/FormaDeBolo'

function App() {
  return (
    <>
      <div>
        <FormaDeBolo sabor="laranja" cobertura="chocolate" />
        <FormaDeBolo sabor="chocolate" cobertura="chantilly" />
      </div>
      <div>
        <FormaDeDoce tipo="Pudim" sabor="maracuja" />
      </div>
    </>
  );
};

export default App;

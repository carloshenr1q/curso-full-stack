import React from 'react';
import { Componente1, Componente2, Componente3 } from './components/VariosComponentes';

const App = () => {
  return (
    <>
      <Componente1 />
      <Componente2 />
      <Componente3 />
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <h4>Footer do site</h4>
  );
};

export default App;

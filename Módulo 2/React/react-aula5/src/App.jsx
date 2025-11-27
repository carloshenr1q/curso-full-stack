import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import CardDinamico from './components/CardDinamico'

function App() {

  return (
    <>
      <div>
        <Card
          title="Noticia1"
          category="Esportes"
          content="Conteúdo da notícia 1"
          image={"https://64.media.tumblr.com/d26beb24befa60f6f507334507795dbe/dc96b5f33cd6914a-4b/s2048x3072/79335763d5458033c276f1fc6b27a8abb17acfc5.jpg"}
          
        />
        <Card
          title="Notícia 2"
          category="Finanças"
          content="Conteúdo da 2"
          style="display: 'none'"
        />
        <Card
          title="Notícia 3"
          category="Tecnologia"
          content="Conteúdo da notícia 3"
          image={"https://yanksolutions.com.br/wp-content/uploads/2024/03/tecnologia-para-o-bem.webp"}
        />
        <CardDinamico>
          <h2>Card Dinâmico</h2>
          <p>Esse é um exemplo de card utilizando children.</p>
        </CardDinamico>
      </div>
    </>
  );
};

export default App

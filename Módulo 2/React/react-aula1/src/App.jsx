function MyButton(){
  return (
    <button>
      Eu sou um botão
    </button>
  );
}

export default function MyApp(){
  return (
    <div>
      <h1>Bem Vindo ao meu aplicativo</h1>
      <MyButton />
    </div>
  );
}

export default MyApp;
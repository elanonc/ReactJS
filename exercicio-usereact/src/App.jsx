import React from 'react';
import Produto from './components/Produto';
import './App.css';

function App() {  

  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick (event) {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    console.log(response);

    const json = await response.json(); // a constante json recebe a response transformada em json que é uma promisse
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <h1>PRODUTOS</h1>
      <div className="App">
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>tablet</button>
        { carregando && <p>Carregando...</p>}
        { dados && <Produto dados={dados}/>}
      </div>
    </div>
  )
}

export default App;
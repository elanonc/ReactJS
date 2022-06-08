import React from 'react';
import './App.css';
// import Produto from './components/Produto';

function App() {
  const [produto, setProdutos] = React.useState(null);

  function handleClick ({target}) {
    setProdutos(target.innerText);  
  }

  return (
    <div className="App">
      <h1>PREFERÊNCIA</h1>
      <button onClick={handleClick} >
        notebook
      </button> 
      <button onClick={handleClick}> 
        smartphone
      </button>   
    </div>
  )
}

export default App;

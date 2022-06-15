import React from 'react';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

function App() {
  const [cores, setCores] = React.useState([]);

  function handleChange({target}) {
    if (target.checked) { // se target for verdadeiro ou seja estiver marcado
      setCores([...cores, target.value]); // adiciono um novo valor no vetor
    } else {
      setCores(cores.filter((cor) => cor !== target.value)); // utilizo a função filter para verificar 
    }                                                          // se o valor foi desmarcado, e assim remover
  }

  function handleChecked(cor){
    return cores.includes(cor); // apenas verifico se a cor que vou adc ja existe no array de cores
  }

  return (
    <div>
      <form>
        {coresArray.map((cor, index) => (
          <label key={index}>
            <input type="checkbox" value={cor} 
                   checked={cores.includes(cor)} onChange={handleChange}/>
            {cor}
          </label>
        ))}
      </form>
    </div>
  )
}

export default App;
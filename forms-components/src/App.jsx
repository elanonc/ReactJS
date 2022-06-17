import React from 'react';
import Imput from './Forms/Input';
import Select from './Forms/Select';
import Radio from './Forms/Radio';
import Checkbox from './Forms/Checkbox';

function App() {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [lip, setLip] = React.useState('');

  return (
    <div className="App">
      <form>
        <Checkbox options={['JavaScript', 'Python', 'Haskell', 'C++']} value={lip} setValue={setLip}/>
        <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor}/>
        <Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto} />
      </form>
    </div>
  )
}

export default App;

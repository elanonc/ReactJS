import React from "react";
import styled from "styled-components";

import "./App.css";

const ProdutosContainer = styled.div`
  display: flex;
`;
  
const Produtos = styled.div`
  flex: 1
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Descricao = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Preco = styled.p`
  background: ${({cor}) => cor}; // ${(props) => props.cor}
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? "#53d956" : "#84e")};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: white;
  cursor: pointer;
  &:hover {
    background: tomato;
  } 
`

function App() {
  const [ativo, setAtivo] = React.useState(false);
 
  const handleClick = () => {
    setAtivo(!ativo);
  }

  return (
    <div>
    <Comprar ativo={ativo} onClick={handleClick}>Compre aqui</Comprar>
    <ProdutosContainer>
      <Produtos>
        <Titulo>Macbook</Titulo>
        <Descricao>Apple</Descricao>
        <Preco cor="#84e">R$ 20.000</Preco>
        </Produtos>
      <Produtos>
        <Titulo>Ventilador</Titulo>
        <Descricao>Arno Silence Force</Descricao>
        <Preco cor="#53d956">R$ 200</Preco>
      </Produtos>
    </ProdutosContainer>
    </div>
  )
}

export default App;
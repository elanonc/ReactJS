import React from "react";
import styles from "./Produto.module.css"

function Produto() {
  return (
    <div>
        <h1 className={styles.titulo}>Produto</h1>
        <p className={styles.preco}>R$ 00.00</p>
        <button className={styles.botao}>Comprar</button>
    </div>
  )
}

export default Produto;
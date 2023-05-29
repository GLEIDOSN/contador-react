import { useState } from "react";
import styles from './button.module.css'

export default function MeuContador() {

    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    }

    function diminuir() {
        setContador(contador - 1);
    }

    return (
        <div className="container">
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            {contador < 0 ? <h4>Valor está negativo.</h4> : null}
            <button className={styles.myButton} onClick={aumentar} >aumentar</button>
            <button className={styles.myButton} onClick={diminuir} >diminuir</button>
        </div>
    )
}
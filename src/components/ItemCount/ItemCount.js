import * as React from 'react'
import "./ItemCount.css"

const ItemCount = () => {


    let disabled1 = true;
    let disabled2 = false;
    const [counter, setCounter] = React.useState(0);

    const sumar = () => {
        setCounter((numero) => numero + 1)
    }

    const restar = () => {
        setCounter((numero) => numero - 1)
    }

    if (counter === 0) {
        disabled1 = true;
        disabled2 = false;
    } else if ((counter >= 1) && (counter <= 14)) {
        disabled1 = false;
        disabled2 = false;
    } else if (counter === 15) {
        disabled1 = false;
        disabled2 = true;
    }

    return (
        <div >
            <div className="clicker">
                <button className="btnClick" onClick={restar} disabled={disabled1}>-</button>
                <p className="stock">Cantidad: {counter}</p>
                <button className="btnClick" onClick={sumar} disabled={disabled2}>+</button>
            </div>
            <>
                <p className="enCarrito">Stock maximo: 15 </p>
            </>
        </div >
    )
}

export default ItemCount;

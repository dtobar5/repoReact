// rafce

import React from 'react'
import "./Item.css"

const Item = ({ id, title, price, pictureUrl }) => {

    return (
        <div className="item">

            <span className="tituloItem">{title}</span>
            <img src={pictureUrl} alt="imagen" className="imagenItem" />
            <p className="precioItem">{price}</p>
            <button className="detallesItem">Ver detalles</button>

        </div>
    )
}

export default Item

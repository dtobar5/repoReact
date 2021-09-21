import React from 'react'
import "./ItemDetail.css"


const ItemDetail = ({ id, title, price, pictureUrl, description }) => {


    return (
        <div className="itemDetail">

            <span className="tituloItemDet">{title}</span>

            <img src={pictureUrl} alt="imagen" className="imagenItemDet" />

            <p className="precioItemDet">{price}</p>
            <p className="descItemDet"></p>
            <button className="detItem">Ver detalles</button>
            <p className="descDetItem">{description}</p>
        </div>
    )
}

export default ItemDetail;

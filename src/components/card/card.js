import React from 'react'
import "./card.css"

const Card = ({ title, src, description, mensaje }) => {
    return (
        <div className="card">
            <span className="tituloCard">{title}</span>
            <img src={src} alt="imagen" className="imagenCard" />
            <p className="descripcionCard">{description}</p>
            <button className="btnCard" onClick={mensaje}>Mensaje</button>
        </div>
    )
}

export default Card;

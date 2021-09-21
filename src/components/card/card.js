import React from 'react'
import "./card.css"
import { Link } from "react-router-dom";

const Card = ({ title, image, description, productId }) => {

    return (

        <div className="card">

            <span className="tituloCard">{title}</span>
            <Link to={`/product/${productId}`}>
                <img src={image} alt="imagen" className="imagenCard" />
            </Link>
            <p className="descripcionCard">{description}</p>
            <button className="btnCard">Al carrito</button>
        </div>
    )
}

export default Card;

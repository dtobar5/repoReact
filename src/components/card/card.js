import React from 'react'
import "./card.css"


const Card = ({ title, image, description }) => {


    {/*
    const productos = [
        { id: 0, name: "mochila", price: 100 },
        { id: 1, name: "prod2", price: 70 },
        { id: 2, name: "prod3", price: 60 },
        { id: 3, name: "prod4", price: 50 }
    ]

     const productos2 = [
        { id: 0, title: "produ1", description: "descripcion del producto", image: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" },
        { id: 1, title: "produ2", description: "descripcion del producto", image: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" },
        { id: 2, title: "produ3", description: "descripcion del producto", image: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" },
        { id: 3, title: "produ4", description: "descripcion del producto", image: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" }
    ] */}

    return (

        <div className="card">

            { /*
        <ul className="fuente">
            {productos.map((producto) => {
                return <li key={producto.id}>{producto.name}</li>
            })}
        </ul>

            <ul className="fuente">
                {productos2.map((producto) => {
                    return (
                        <Card
                            key={producto.id}
                            title={producto.title}
                            description={producto.description}
                            image={producto.image}
                        />
                    )
                })}
            </ul> */ }

            <span className="tituloCard">{title}</span>
            <img src={image} alt="imagen" className="imagenCard" />
            <p className="descripcionCard">{description}</p>
            <button className="btnCard">Al carrito</button>
        </div>
    )
}

export default Card;

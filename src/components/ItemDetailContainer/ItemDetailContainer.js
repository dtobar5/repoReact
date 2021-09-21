import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {

    const [cosas, setCosas] = React.useState([]);
    const [load, setLoad] = React.useState(false);

    React.useEffect(() => {
        setLoad(true);
        getCosas()
            .then((result) => setCosas(result))
            .finally(() => setLoad(false));
    }, []);

    const getCosas = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });
    };

    const items = [
        { id: 0, title: "ItemDetail1", price: 50000, pictureUrl: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp", description: "Esta es la descripcion del item 1" },
        { id: 1, title: "ItemDetail2", price: 80000, pictureUrl: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp", description: "Esta es la descripcion del item 2" },
        { id: 2, title: "ItemDetail3", price: 120000, pictureUrl: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp", description: "Esta es la descripcion del item 3" }
    ]


    return (
        <div className="itemContainer">
            {load ? <p className="fuente">Esta cosa esta cargando... </p> : null}
            {cosas?.map((cosa) => {
                return (

                    <ItemDetail
                        key={cosa.id}
                        title={cosa.title}
                        price={cosa.price}
                        pictureUrl={cosa.pictureUrl}
                        description={cosa.description}
                    />

                )
            })}
        </div>
    )
};

export default ItemDetailContainer;
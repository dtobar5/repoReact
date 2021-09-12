import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = () => {

    const [cosas, setCosas] = React.useState([]);
    const [load, setLoad] = React.useState(false);

    React.useEffect(() => {
        setLoad(true);
        getItems()
            .then((result) => setCosas(result))
            .finally(() => setLoad(false));
    }, []);

    const getItems = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });
    };

    const items = [
        { id: 0, title: "item1", price: 500, pictureUrl: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" },
        { id: 1, title: "item2", price: 800, pictureUrl: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" },
        { id: 2, title: "item3", price: 1200, pictureUrl: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" }
    ]

    return (
        <div className="itemContainer">
            {load ? <p className="fuente">Aguantate un tantito que esta cosa anda lenta... </p> : null}
            {cosas?.map((item) => {
                return (
                    <Item
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        pictureUrl={item.pictureUrl}
                    />
                )
            })}
        </div>
    )
}

export default ItemList;

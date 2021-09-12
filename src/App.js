import React from 'react';
import './App.css';
import Card from './components/card/card';
import Header from './components/header/header';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import NavBar from './components/navBar/navBar';

const App = () => {

  // se crea el estado para la promesa de los productos
  const [items, setItems] = React.useState([]);
  // se crea el estado para el loading como falso
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getProducts()
      .then((result) => setItems(result))
      .finally(() => setLoading(false));
  }, []);

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos2);
      }, 4000);
    });
  };

  const productos2 = [
    { id: 0, title: "produ1", description: "descripcion del producto", image: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" },
    { id: 1, title: "produ2", description: "descripcion del producto", image: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" },
    { id: 2, title: "produ3", description: "descripcion del producto", image: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" },
    { id: 3, title: "produ4", description: "descripcion del producto", image: "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" }
  ]

  // <> </> en vez del div App, se usa ese para que no se vea representado en html
  return (

    <div className="App">
      <NavBar />
      <Header name="Pepe Lota" />
      <ItemListContainer />
      <ItemCount />

      <div className="cardContainer">

        <ul>
          { /*se define que muestre el mensaje de loading */}
          {loading ? <p className="fuente">Aguantate un tantito que esta cosa anda lenta... </p> : null}
          {/* se toman los datos del array productos 2 y se pasan al estado */}
          {items?.map((producto) => {
            return (
              <Card
                key={producto.id}
                title={producto.title}
                description={producto.description}
                image={producto.image}
              />
            )
          })}
        </ul>
        {/* <Card
          title="Producto 1"
          src="https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" description="Descripcion del producto 1"
          mensaje={mensaje}
        />
        <Card
          title="Producto 2"
          src="https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" description="Descripcion del producto 2"
        />
        <Card
          title="Producto 3"
          src="https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" description="Descripcion del producto 3"
        />
        <Card
          title="Producto 4"
          src="https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp" description="Descripcion del producto 4"
       /> */}
      </div>

    </div>
  )
};

export default App;



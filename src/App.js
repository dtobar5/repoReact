import './App.css';
import Card from './components/card/card';
import Header from './components/header/header';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import NavBar from './components/navBar/navBar';

const App = () => {

  const mensaje = () => {
    console.log("saludos");
  }

  // <> </> en vez del div App, se usa ese para que no se vea representado en html
  return (

    <div className="App">
      <NavBar />
      <Header name="Pepe Lota" />
      <ItemListContainer />

      <div className="cardContainer">
        <Card
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
        />
      </div>
      <ItemCount />

    </div>
  )
};

export default App;



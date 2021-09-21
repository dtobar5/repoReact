// rafce

import React from "react";
import Card from "../components/card/card";
import Header from "../components/header/header";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/itemListContainer/itemListContainer";

const Home = () => {
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

  ////////////////////////// poke api

  const [poke, setPoke] = React.useState([]);

  React.useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
    // devuelve una respuesta
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      // trae la informacion solicitada y la guarda en data
      .then((data) => setPoke(data.results))
      //muestra error y la variable status del api
      .catch((error) =>
        console.log(`se pudrio todo,fue un error ${error.status}`)
      );
    // array de dependencias para que no se ejecute en loop, solo una vez
  }, []);

  ////////////////////////// db.json

  const [dat, setDat] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const url = "http://localhost:3001/products";
    // devuelve una respuesta
    setCargando(true);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      // trae la informacion solicitada y la guarda en data
      .then((dat) => setDat(dat))
      //muestra error y la variable status del api
      .catch((error) => setError(error))
      // array de dependencias para que no se ejecute en loop, solo una vez
      .finally(() => setCargando(false));
  }, []);

  ////////////////////// se crea una funcion asyncrona (async away, donde se crea un nuevo producto con metodo post al presionar el boton en el error)

  const postProducto = async () => {
    const newProducto = {
      title: "CosaUno",
      description: "Esta es la descripción del producto cosa",
      price: 666420,
      image:
        "https://cdn1.static-tgdp.com/ui/productimages/approved/std.lang.all/62/64/696264_sized_1800x1200_rev_1.jpg",
    };
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProducto),
    });
    return response.json();
  };

  //////////////////////////

  const [notDigimon, setNotDigimon] = React.useState([]);

  React.useEffect(() => {
    const urlDos = "https://pokeapi.co/api/v2/pokemon?limit=20";

    fetch(urlDos)
      .then((response) => {
        return response.json();
      })
      .then((datos) => setNotDigimon(datos.results))
      .catch((error) => console.log("super error"));
  }, []);

  //////////////////////////

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos2);
      }, 4000);
    });
  };

  const productos2 = [
    {
      id: 0,
      title: "produ1",
      description: "descripcion del producto",
      image:
        "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp",
    },
    {
      id: 1,
      title: "produ2",
      description: "descripcion del producto",
      image:
        "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp",
    },
    {
      id: 2,
      title: "produ3",
      description: "descripcion del producto",
      image:
        "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp",
    },
    {
      id: 3,
      title: "produ4",
      description: "descripcion del producto",
      image:
        "https://http2.mlstatic.com/D_Q_NP_683733-MLC45682674354_042021-AB.webp",
    },
  ];

  // <> </> en vez del div App, se usa ese para que no se vea representado en html

  return (
    <div>
      <h1>Home</h1>
      <Header name="Pepito" />

      <div className="cardContainer">
        <ul>
          {/*se define que muestre el mensaje de loading */}
          {loading ? (
            <p className="fuente">
              Aguantate un tantito que esta cosa anda lenta...{" "}
            </p>
          ) : null}
          {/* se toman los datos del array productos 2 y se pasan al estado */}
          {items?.map((producto) => {
            return (
              <Card
                key={producto.id}
                productId={producto.id}
                title={producto.title}
                description={producto.description}
                image={producto.image}
              />
            );
          })}
        </ul>
      </div>

      <h1 style={{ margin: "5rem 0" }}>Ignorar de aqui para abajo</h1>

      <ItemDetailContainer />
      <ItemListContainer />

      <>
        {notDigimon.map((pokemon) => {
          return <p className="fuente">{pokemon.name}</p>;
        })}
        ;
      </>

      <>
        <br></br>
        <button onClick={postProducto} className="fuente">
          Cargar nuevo producto
        </button>
        <br></br>
        {cargando && <p className="fuente">Cargando...</p>}
        {error && (
          <p className="fuente">
            Ha habdo un error: {error.status} {error.statusText}
          </p>
        )}
        {dat?.map((product) => {
          return (
            <div className="cardContainer">
              <ul>
                <Card
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                />
              </ul>
            </div>
          );
        })}
        ;
      </>
    </div>
  );
};

export default Home;

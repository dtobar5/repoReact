//rafce

import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const [product, setProduct] = React.useState({});
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("errorss"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  } else {
    return (
      <div>
        <h1> Detalles de productos</h1>
        <p className="fuente">{product?.title}</p>
        <img src={product?.image} alt="imagen de producto" />
        <p className="fuente">{product?.description}</p>
      </div>
    );
  }
};

export default ProductDetail;

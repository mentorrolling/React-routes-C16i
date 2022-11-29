import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import productos from "../data/product.json";

const ProductoScreen = () => {
  const { product } = productos;

  const { id } = useParams();

  console.log(id);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    encontrarProducto();
  }, [id]);

  const encontrarProducto = () => {
    let objeto = product.find((item) => {
      return item.id == id;
    });

    setProducto(objeto);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        {producto ? (
          <div className="col">
            <h1>Producto id: {producto.id} </h1>
            <div className="card my-3">
              <div className="row g-0">
                <div className="col-md-4 p-2">
                  <img
                    src={producto.image}
                    className="img-fluid rounded-start"
                    alt={producto.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">{producto.description}</p>
                    <p className="card-text">
                      <small className="text-muted "></small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Stock: {producto.rating.count}
                      </small>
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <h4 className="m-0">Precio: ${producto.price}</h4>
                      <button className="btn btn-success">Comprar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col text-center">
            <h3>No se encuentra el producto 😭</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductoScreen;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/product.json";

const ProductoScreen = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    encontrarProducto();
  }, []);

  const encontrarProducto = () => {
    let objeto = productos.product.filter((item) => {
      return item.id == id;
    });

    setProducto(objeto);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        {producto.length > 0 ? (
          <div className="col">
            <h1>Producto id: {producto[0].id}</h1>
            <div class="card my-3">
              <div class="row g-0">
                <div class="col-md-4 p-2">
                  <img
                    src={producto[0].image}
                    class="img-fluid rounded-start"
                    alt={producto[0].title}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{producto[0].title}</h5>
                    <p class="card-text">{producto[0].description}</p>
                    <p class="card-text">
                      <small class="text-muted">{producto[0].category}</small>
                    </p>
                    <p class="card-text">
                      <small class="text-muted">
                        Stock: {producto[0].rating.count}
                      </small>
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <h4 className="m-0">Precio: ${producto[0].price}</h4>
                      <button className="btn btn-success">Comprar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col">
            <h3>Cargando...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductoScreen;

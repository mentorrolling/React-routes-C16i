import React, { useState, useEffect } from "react";
import productos from "../data/product.json";

const ProductoScreen = () => {
  const [producto, setProducto] = useState([]);

  const encontrarProducto = () => {
    let objeto = productos.product.filter((item) => {
      return item.id == id;
    });

    setProducto(objeto);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Producto id: </h1>
          <div className="card my-3">
            <div className="row g-0">
              <div className="col-md-4 p-2">
                <img src="" className="img-fluid rounded-start" alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Stock:</small>
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <h4 className="m-0">Precio: </h4>
                    <button className="btn btn-success">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoScreen;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import productos from "../data/product.json";

const HomeScreen = () => {
  const { product } = productos;
  const [products, setProducts] = useState(product);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <h1>Bienvenid@ 😎</h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 my-3">
        {products.map((producto) => (
          <div className="col" key={producto.id}>
            <div className="card mb-3 h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={producto.image}
                    className="img-fluid rounded-start img-card p-2"
                    alt={producto.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <Link className="nav-link" to={`/product/${producto.id}`}>
                      <h5 className="card-title">{producto.title}</h5>
                    </Link>

                    <p className="card-text">{producto.category}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                  <div className="card-footer ">
                    <h4 className="text-end">${producto.price}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

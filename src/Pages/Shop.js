import React from "react";
import Itemshop from "../Components/Itemshop";
import { BiError } from "react-icons/bi";

function Shop({ busqueda, Dates }) {
  return (
    <section className="shop-section">
      <div className="title-section-shop">
        <p>La busqueda es : </p> <h4>"{busqueda}"</h4>
      </div>

      <div className="container-products-shop">
        {Dates.length > 0 &&
          Dates.map((product, key) => {
            return (
              <Itemshop
                name={product.nombre}
                price={product.price}
                img={product.img}
                type={product.type}
                key={key}
                id={product._id}
                cantidad={1}
              />
            );
          })}
      </div>
      {Dates.length === 0 && (
        <div className="Shop-coincidencias">
          <p>No hay Coincidencias</p>
          <BiError />
        </div>
      )}
    </section>
  );
}

export default Shop;

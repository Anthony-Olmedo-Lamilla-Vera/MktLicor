import React, { useEffect, useState } from "react";
import Itemshop from "../Components/Itemshop";
import { Products } from "../Dates/ApiJson";
import { useLocation, useParams } from "react-router-dom";
import { BiError } from "react-icons/bi";

function Shop() {
  const [FilProd, setFilProd] = useState([]);

  let location = useParams();
  const { name } = location;
  useEffect(() => {
    const { name } = location;

    console.log(name);
  }, [location]);
  useEffect(() => {
    const filtro = Products.filter(
      (product) =>
        product.nombre.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
    setFilProd(filtro);
  }, [name]);

  return (
    <section className="shop-section">
      <div className="title-section-shop">
        <p>La busqueda es : </p> <h4>"{name}"</h4>
      </div>

      <div className="container-products-shop">
        {FilProd.length > 0 &&
          FilProd.map((product) => {
            return (
              <Itemshop
                name={product.nombre}
                price={product.price}
                img={product.img}
                type={product.type}
                key={product.id}
                id={product.id}
                cantidad={product.cantidad}
              />
            );
          })}
      </div>
      {FilProd.length === 0 && (
        <div className="Shop-coincidencias">
          <p>No hay Coincidencias</p>
          <BiError />
        </div>
      )}
    </section>
  );
}

export default Shop;

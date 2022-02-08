import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../Dates/ApiJson";
import Shop from "./Shop";

function Searchproducts() {
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

  return <Shop Dates={FilProd} busqueda={name} />;
}

export default Searchproducts;

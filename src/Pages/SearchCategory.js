import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../Dates/ApiJson";
import Shop from "./Shop";

function SearchCategory() {
  const [FilProd, setFilProd] = useState([]);

  let location = useParams();
  const { category } = location;
  useEffect(() => {
    const { category } = location;

    console.log(category);
  }, [location]);
  useEffect(() => {
    const filtro = Products.filter(
      (product) =>
        product.type.toLowerCase().indexOf(category.toLowerCase()) !== -1
    );
    setFilProd(filtro);
  }, [category]);

  return <Shop Dates={FilProd} busqueda={category} />;
}

export default SearchCategory;

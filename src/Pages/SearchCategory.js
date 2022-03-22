import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urlHostServer } from "../Dates/Reduces";

import Shop from "./Shop";

function SearchCategory() {
  const [FilProd, setFilProd] = useState([]);
  const Products = [];
  const getItems = async () => {
    await axios.get(urlHostServer + "/get-product/").then((product) => {
      Products.push(product.data);
    });
  };
  let location = useParams();

  const { category } = location;
  useEffect(async () => {
    await getItems();
    const filtro = Products[0].filter(
      (product) =>
        product.type.toLowerCase().indexOf(category.toLowerCase()) !== -1
    );
    setFilProd(filtro);
  }, [category]);

  return <Shop Dates={FilProd} busqueda={category} />;
}

export default SearchCategory;

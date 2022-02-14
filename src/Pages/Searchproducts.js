import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../Dates/ApiJson";
import { urlHostServer } from "../Dates/Reduces";
import Shop from "./Shop";

function Searchproducts() {
  const [FilProd, setFilProd] = useState([]);
  const [ArrayDatos, setArrayDatos] = useState([]);
  const arr = [];
  const getItems = async () => {
    await axios.get(urlHostServer + "/get-product/").then((product) => {
      //setArrayDatos(product.data);
      arr.push(product.data);
      // console.log(product.data);
      //console.log(ArrayDatos);
      console.log(arr[0]);
    });
    // setArrayDatos(arr[0]);
  };

  let location = useParams();
  const { name } = location;

  useEffect(async () => {
    const { name } = location;

    await getItems();

    if (arr[0]) {
      const filtro = await arr[0].filter(
        (product) =>
          product.nombre.toLowerCase().indexOf(name.toLowerCase()) !== -1
      );
      setFilProd(filtro);
    }
    console.log(arr);
  }, [name]);
  return <Shop Dates={FilProd} busqueda={name} />;
}

export default Searchproducts;

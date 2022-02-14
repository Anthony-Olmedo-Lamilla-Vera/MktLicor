import React, { useEffect, useState } from "react";
import Tbody from "../Components/Tbody";
import axios from "axios";

function Tabla() {
  const [ArrayDatos, setArrayDatos] = useState();
  const getItems = async () => {
    await axios.get("http://localhost:2000/get-product/").then((product) => {
      setArrayDatos(product.data);
    });
  };
  useEffect(() => {
    return getItems();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Actions </th>
          <th>Nombre</th>
          <th>type</th>
          <th>Image</th>
          <th>price</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        {ArrayDatos
          ? ArrayDatos.map((x, key) => {
              return (
                <Tbody
                  id={x._id}
                  key={key}
                  nombre={x.nombre}
                  tipo={x.type}
                  img="img"
                  price={x.price}
                  stock={x.stock}
                />
              );
            })
          : ""}
      </tbody>
    </table>
  );
}

export default Tabla;

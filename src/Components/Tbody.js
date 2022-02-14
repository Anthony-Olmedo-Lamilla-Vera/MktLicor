import axios from "axios";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ModalEdit from "../Elements/ModalEdit";

function Tbody({ id, nombre, tipo, img, price, stock }) {
  const [Edit, setModalEdit] = useState(false);
  function Edits() {
    console.log(id);
    setModalEdit(true);
  }
  function DeleteItem() {
    axios
      .delete("http://localhost:2000/delete-product/" + id)
      .then((response) => {
        console.log(response.data);
      });
  }
  return (
    <>
      <tr>
        <td>
          <button onClick={Edits}>
            <span>
              <FiEdit />
            </span>
          </button>
          <button onClick={DeleteItem}>
            <span>
              <AiFillDelete />
            </span>
          </button>
        </td>
        <td>{nombre}</td>
        <td>{tipo}</td>
        <td>{img}</td>
        <td>{price}</td>
        <td>{stock}</td>
      </tr>
      {Edit ? <ModalEdit setModal={setModalEdit} id={id} /> : ""}
    </>
  );
}

export default Tbody;

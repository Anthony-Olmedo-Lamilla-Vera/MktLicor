import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { urlHostServer } from "../Dates/Reduces";
import ModalEdit from "../Elements/ModalEdit";
import { useLocation } from "react-router-dom";

function Tbody({ id, nombre, tipo, img, price, stock }) {
  let location = useLocation();
  const [Edit, setModalEdit] = useState(false);
  function Edits() {
    console.log(id);
    setModalEdit(true);
  }
  function DeleteItem() {
    axios.delete(urlHostServer + "/delete-product/" + id).then((response) => {
      console.log(response.data);
      window.location.reload();
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
        <td>
          <img src={img} width={90} height={90} alt="" />
        </td>
        <td>{price}</td>
        <td>{stock}</td>
      </tr>
      {Edit ? <ModalEdit setModal={setModalEdit} id={id} /> : ""}
    </>
  );
}

export default Tbody;

import axios from "axios";
import React, { createRef, useEffect, useState } from "react";
import { returnEdi } from "../Components/Tbody";

function ModalEdit({ setModal, id }) {
  const [NombreProduct, setNombreProduct] = useState("");
  const [Type, setType] = useState("Vino");
  const [Price, setPrice] = useState(15);
  const [Img, setImg] = useState("d");
  const [Stock, setStock] = useState(15);
  const getid = async () => {
    const data = [];
    await axios.get("http://localhost:2000/edit-id/" + id).then((response) => {
      console.log(response.data.itemEditado);
      setNombreProduct(response.data.itemEditado.nombre);
      setPrice(response.data.itemEditado.price);
      setStock(response.data.itemEditado.stock);
      setType(response.data.itemEditado.type);
    });
  };
  useEffect(() => {
    getid();
  }, []);

  let refInput = createRef();
  async function editProduct(e) {
    e.preventDefault();
    console.log(id);

    await axios
      .put(
        "http://localhost:2000/edit-product/",
        {
          id: id,
          nombre: NombreProduct,
          type: Type,
          price: Price,
          stock: Stock,
        },
        {
          headers: { "content-type": "application/json" },
        }
      )
      .then((response) => {
        console.log(response.data);
        setNombreProduct("");
        setPrice("");
        setStock("");
        setType("");
        setModal(false);
      });
  }
  return (
    <div className="cont-modal-agg">
      <div className="modal-agg">
        <form>
          <div className="input-form">
            <label htmlFor="">Nombre</label>
            <input
              value={NombreProduct}
              onChange={(e) => setNombreProduct(e.target.value)}
              type="text"
              ref={refInput}
            />
          </div>
          <div className="input-form">
            <label htmlFor="">Type</label>
            <select value={Type} onChange={(e) => setType(e.target.value)}>
              <option value="Vino">Vino</option>
              <option value="Champan">Champan</option>
              <option value="Tekila">Tekila</option>
              <option value="Vodka">Vodka</option>
            </select>
          </div>
          <div className="input-form">
            <label htmlFor="">Price</label>
            <input
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
            />
          </div>
          <div className="input-form">
            <label htmlFor="">Imagen</label>
            <input
              value={Img}
              onChange={(e) => setImg(e.target.value)}
              type="text"
            />
          </div>
          <div className="input-form">
            <label htmlFor="">Stock</label>
            <input
              value={Stock}
              onChange={(e) => setStock(e.target.value)}
              type="number"
            />
          </div>

          <div className="buttons-actions">
            <button className="btn-agg" onClick={editProduct}>
              Editar
            </button>
            <button className="btn-delete" onClick={() => setModal(false)}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEdit;

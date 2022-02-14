import axios from "axios";
import React, { createRef, useState } from "react";

function ModalAgg({ setModal }) {
  const [NombreProduct, setNombreProduct] = useState("");
  const [Type, setType] = useState("Vino");
  const [Price, setPrice] = useState(0);
  const [Img, setImg] = useState();
  const [Stock, setStock] = useState(0);
  const [MensajeDeAgregado, setMensajeDeAgregado] = useState(false);
  let refMensaje = createRef();

  const AgregateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", NombreProduct);
    formData.append("type", Type);
    formData.append("price", Price);
    formData.append("stock", Stock);
    formData.append("img", Img);
    console.log(formData);
    await axios
      .post("http://localhost:2000/create-product/", formData)
      .then((response) => {
        console.log(response.data);

        refMensaje.current.animate(
          [
            { opacity: 1 },
            {
              // to
              opacity: 1,
              color: "#ffffff",
            },
          ],
          2500
        );
        setNombreProduct("");
        setType("");
        setPrice("");
        setStock("");
      });
  };
  return (
    <div className="cont-modal-agg">
      <div className="modal-agg">
        <form action="">
          {
            <p className="mens" ref={refMensaje}>
              Agregado
            </p>
          }
          <div className="input-form">
            <label htmlFor="">Nombre</label>
            <input
              value={NombreProduct}
              onChange={(e) => setNombreProduct(e.target.value)}
              type="text"
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
              onChange={(e) => setImg(e.target.files)}
              type="file"
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
            <button className="btn-agg" onClick={AgregateProduct}>
              Agregar
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

export default ModalAgg;

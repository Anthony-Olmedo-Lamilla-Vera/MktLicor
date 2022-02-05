import React from "react";

function ModalDelete({ setValue }) {
  return (
    <div className="modal-cart-delete">
      <div className="cont-modal-delete">
        <div className="head-modal-delete">
          <p>Eliminado Correctamente del Carrito de Compras</p>
        </div>

        <div className="button-cancelar">
          <button onClick={() => setValue(false)}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;

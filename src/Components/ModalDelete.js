import React from "react";

function ModalDelete({ setValue }) {
  return (
    <div className="modal-cart-delete">
      <div className="cont-modal-delete">
        <div className="head-modal-delete">
          <p>Deseas Eliminar el Item del Carrito de Compras ?</p>
        </div>
        <div className="confirm-modal-delete">
          <form>
            <div className="option-delete">
              <button className="si_delete" onClick={() => setValue(false)}>
                Si , Eliminar{" "}
              </button>
            </div>
            <div className="option-delete">
              <button htmlFor="" onClick={() => setValue(false)}>
                No{" "}
              </button>
            </div>
          </form>
        </div>
        <div className="button-cancelar">
          <button onClick={() => setValue(false)}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;

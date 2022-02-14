import React, { useState } from "react";
import ModalAgg from "../Elements/ModalAgg";
import ModalEdit from "../Elements/ModalEdit";
import Tabla from "../Elements/Tabla";

function Agregate() {
  const [Modal, setModal] = useState(false);

  return (
    <div className="container-estadisticas text-center">
      <header>
        <h1> Panel de Control</h1>
      </header>
      <main>
        <section className="table-product">
          <Tabla />
          <div className="buttons-actions">
            <button className="btn-agg" onClick={() => setModal(true)}>
              Agregar
            </button>
          </div>
        </section>
        {Modal ? <ModalAgg setModal={setModal} /> : ""}
      </main>
    </div>
  );
}
export default Agregate;

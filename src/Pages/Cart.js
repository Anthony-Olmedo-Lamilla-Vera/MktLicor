import React, { useState } from "react";
import ItemProduct from "../Components/ItemProduct";
import ModalDelete from "../Components/ModalDelete";
import Footer from "../Elements/Footer";

function Cart() {
  const [Delete, setDelete] = useState(false);
  let value = 1;
  return (
    <div className="content-cart">
      {Delete ? <ModalDelete setValue={setDelete} /> : ""}
      {value === 1 ? (
        <div className="compras-content">
          <div className="title-cart">
            <p>Carrito de Compras </p>
          </div>
          <div className="items-cart">
            <ItemProduct setValue={setDelete} />
            <ItemProduct setValue={setDelete} />
          </div>

          <div className="domicilio">
            <p>Desea A domicilio ?</p>
            <div className="buttons-domicilio">
              <form>
                <label htmlFor=""> Si </label>
                <input type="radio" value="true" />
                <label htmlFor=""> No </label>
                <input type="radio" value="false" />
              </form>
            </div>
          </div>
          <div className="total-cart">
            <div className="text-cart">
              <p>Subtotal : $ 15 </p>
              <p>iva 12% : $0 .8</p>
              <p>total envio : $ 0 </p>
            </div>
            <p className="Total ">Total A Pagar : $ 15.8</p>
          </div>

          <div className="button-pagar">
            <button>Pagar</button>
          </div>
        </div>
      ) : (
        <p>no hay </p>
      )}
      <Footer />
    </div>
  );
}

export default Cart;

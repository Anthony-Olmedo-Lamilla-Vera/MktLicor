import React, { useState } from "react";
import { BsCartDash } from "react-icons/bs";
import ItemProduct from "../Components/ItemProduct";
import ModalDelete from "../Components/ModalDelete";
import Footer from "../Elements/Footer";
import { Link } from "react-router-dom";
import { WiDirectionRight } from "react-icons/wi";

function Cart() {
  const [Delete, setDelete] = useState(false);
  let value = 0;
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
        <div className="cont-vacio">
          <div className="title-header-vacio">
            <p>No hay Elementos en el Carrito </p>
          </div>
          <div className="icon-header-vacio">
            <BsCartDash size={50} />
          </div>
          <div className="button-vacio-cart">
            <Link to="/MktLicor">Ir a Comprar</Link>

            <WiDirectionRight size={60} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

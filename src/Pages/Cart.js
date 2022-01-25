import React from "react";
import ItemProduct from "../Components/ItemProduct";
import Footer from "../Elements/Footer";

function Cart() {
  let value = 1;
  return (
    <div className="content-cart">
      {value === 1 ? (
        <div className="compras-content">
          <div className="title-cart">
            <p>CARRITO DE COMPRAS </p>
          </div>
          <div className="items-cart">
            <ItemProduct />
            <ItemProduct />
          </div>

          <div className="domicilio">
            <p>Desea A domicilio ?</p>
            <div className="buttons-domicilio">
              <form action="">
                <button>Si </button>
                <button>No </button>
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

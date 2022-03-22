import React, { useState } from "react";
import { BsCartDash } from "react-icons/bs";
import ItemProduct from "../Components/ItemProduct";
import ModalDelete from "../Components/ModalDelete";
import { Link } from "react-router-dom";
import { WiDirectionRight } from "react-icons/wi";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import DetalleCuenta from "../Components/DetalleCuenta";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Cart() {
  const Productos = useSelector((x) => x);
  const [Items, setItems] = useState(Productos);
  const [Delete, setDelete] = useState(false);
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "102",
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: "100",
              },
              tax_total: {
                currency_code: "USD",
                value: "2",
              },
            },
          },
        },
      ],

      items: [
        {
          name: "First Product Name" /* Shows within upper-right dropdown during payment approval */,
          description:
            "Optional descriptive text.." /* Item details will also be in the completed paypal.com transaction view */,
          unit_amount: {
            currency_code: "USD",
            value: "50",
          },
          quantity: "1",
          tax: {
            currency_code: "USD",
            value: "1",
          },
          category: "PHYSICAL_GOODS",
        },
        {
          name: "First Product Name" /* Shows within upper-right dropdown during payment approval */,
          description:
            "Optional descriptive text.." /* Item details will also be in the completed paypal.com transaction view */,
          unit_amount: {
            currency_code: "USD",
            value: "50",
          },
          quantity: "1",
          tax: {
            currency_code: "USD",
            value: "1",
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then((cap) => {
      console.log(cap);
    });
  };

  let value = true;

  return (
    <div className="content-cart">
      {Delete ? <ModalDelete setValue={setDelete} /> : ""}
      {Productos && Productos.length > 0 ? (
        <div className="compras-content">
          <div className="title-cart">
            <p>Carrito de Compras </p>
          </div>
          <div className="items-cart">
            {Items.map((item, key) => (
              <ItemProduct
                key={key}
                img={item.img}
                price={item.price}
                nombre={item.name}
                cantidad={item.cantidad}
                id={item.id}
                setValue={setDelete}
              />
            ))}
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
          <DetalleCuenta />
          <div className="button-pagar">
            <button>Pagar</button>
          </div>
          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
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

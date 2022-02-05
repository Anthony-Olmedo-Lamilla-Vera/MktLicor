import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function Itemshop({ name, price, img, id, type, cantidad }) {
  const dispatch = useDispatch();
  const Productos = useSelector((x) => x);

  const addtoCart = (Idprod) => {
    let subtotal = cantidad * price;
    dispatch({
      type: "/@addCart",
      dates: { id, name, price, img, type, cantidad, subtotal },
    });
    if (Productos) {
      const ever = Productos.find((x) => x.id === Idprod);
      if (ever) {
        console.log("ya ha sido agregdo");
      } else {
        console.log("Agregado correctamente");
      }
    }
  };
  return (
    <div className="item-shop">
      <div className="container-item-shop">
        <div className="img-item-shop">
          <img src={img} alt="" />
        </div>
        <div className="title-item-shop">
          <h3>{name}</h3>
          <h4>{type}</h4>
          <p>$ {price}</p>
        </div>
        <button onClick={() => addtoCart(id)}>
          <BsCartPlusFill color="#ffffff" size={18} />
        </button>
      </div>
    </div>
  );
}

export default Itemshop;

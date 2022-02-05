import React, { useEffect, useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { typesActions } from "../Dates/Reduces";

function ItemProduct({ cantidad, setValue, img, price, nombre, id }) {
  const [Cantidad, setCantidad] = useState(1);
  const dispatch = useDispatch();

  const KeyUpcantidad = (e) => {
    setCantidad(e.target.value);
    dispatch({
      type: typesActions.CalculoT,
      cant: {
        id: id,
        cantidad: parseInt(e.target.value),
        subt: e.target.value * price,
      },
    });
  };
  function DeleteItem() {
    setValue(true);
    dispatch({
      type: typesActions.deleteItem,
      deleteId: id,
    });
  }

  return (
    <div className="item-cart">
      <div className="img-prod">
        <img src={img} alt="" />
      </div>
      <div className="text-product">
        <div className="dates-product">
          <div className="title-product">
            <p>{nombre}</p>{" "}
          </div>
          <div className="precio-product">
            <p>
              Precio : <span> $ {price} </span>
            </p>
          </div>
          <div className="cantidad-product">
            <p>cantidad : </p>
            <form action="">
              <input
                onChange={(e) => KeyUpcantidad(e)}
                value={Cantidad}
                type="number"
              />
            </form>
          </div>
        </div>
        <div className="button-quitar-cart">
          <button onClick={DeleteItem}>
            <RiDeleteBinFill color="#ffff" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;

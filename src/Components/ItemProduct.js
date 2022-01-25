import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";

function ItemProduct() {
  return (
    <div className="item-cart">
      <div className="img-prod">
        <img
          src="https://img.asmedia.epimg.net/resizer/s8A9gpxfzXlWw1Br_b0PyvssfL8=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/X6TOCBOSZNNEPHLLIJYAY63TAI.jpg"
          alt=""
        />
      </div>
      <div className="text-product">
        <div className="dates-product">
          <div className="title-product">
            <p>Nombre Producto</p>{" "}
          </div>
          <div className="precio-product">
            <p>
              Precio : <span> $ 15 </span>
            </p>
          </div>
          <div className="cantidad-product">
            <p>cantidad : </p>
            <form action="">
              <input value="1" type="number" />
            </form>
          </div>
        </div>
        <div className="button-quitar-cart">
          <button>
            <RiDeleteBinFill color="#ffff" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;

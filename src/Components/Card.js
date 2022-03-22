import React from "react";
import { Link } from "react-router-dom";

function Card({ category, nombre, img }) {
  return (
    <Link to={"/MktLicor/shop/category/" + category}>
      <div className="cont-card">
        <div className="title-card">
          <h4>{nombre}</h4>
        </div>
        <div className="img-card">
          <img src={img} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default Card;

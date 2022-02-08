import React from "react";
import { Link } from "react-router-dom";

function Card({ category, nombre }) {
  return (
    <Link to={"/MktLicor/shop/category/" + category}>
      <div className="cont-card">
        <div className="title-card">
          <h4>{nombre}</h4>
        </div>
        <div className="img-card">
          <img
            src="https://www.eckeroline.com/media/catalog/product/cache/c6a153240b9d57769ada9a8b348b002a/k/a/kahlua.png"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}

export default Card;

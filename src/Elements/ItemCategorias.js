import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function ItemCategorias({ nombre, category, setValue }) {
  return (
    <div onClick={() => setValue(false)}>
      <li>
        <Link to={"/MktLicor/shop/category/" + category}>
          {nombre}
          <span>
            <AiFillCaretRight />
          </span>
        </Link>
      </li>
    </div>
  );
}

export default ItemCategorias;

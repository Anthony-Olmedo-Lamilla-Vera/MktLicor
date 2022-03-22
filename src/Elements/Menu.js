import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { categorias } from "../Dates/ApiJson";
import ItemCategorias from "./ItemCategorias";

function Menu({ setValue }) {
  return (
    <div className="back-menu">
      <div className="slider-menu">
        <div className="head-menu">
          <p>Menu </p>
          <button
            onClick={() => {
              setValue(false);
            }}
          >
            <AiFillCaretLeft size={20} />
          </button>
        </div>
        <div className="titles-menu">
          <div className="title-menu">
            <p>Que buscas ? </p>
            <nav>
              <ul>
                <ItemCategorias
                  setValue={setValue}
                  nombre="Vodka"
                  category={categorias.vodka}
                />
                <ItemCategorias
                  setValue={setValue}
                  nombre="champan"
                  category={categorias.champan}
                />
                <ItemCategorias
                  nombre="tekila"
                  setValue={setValue}
                  category={categorias.tekila}
                />
                <ItemCategorias
                  setValue={setValue}
                  nombre="vino"
                  category={categorias.vino}
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

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
                <li>
                  <a href="">
                    Vodka
                    <span>
                      <AiFillCaretRight />
                    </span>
                  </a>{" "}
                </li>
                <li>
                  <a href="">Whisky</a>
                  <span>
                    <AiFillCaretRight />
                  </span>
                </li>
                <li>
                  <a href="">Tequila</a>{" "}
                  <span>
                    <AiFillCaretRight />
                  </span>
                </li>
                <li>
                  <a href="">Ron</a>{" "}
                  <span>
                    <AiFillCaretRight />
                  </span>
                </li>
                <li>
                  <a href="">Ginebra</a>{" "}
                  <span>
                    <AiFillCaretRight />
                  </span>
                </li>
                <li>
                  <a href="">Brandy</a>{" "}
                  <span>
                    <AiFillCaretRight />
                  </span>
                </li>
                <li>
                  <a href="">Coñac</a>{" "}
                  <span>
                    <AiFillCaretRight />
                  </span>
                </li>
                <li>
                  <a href="">Singani </a>{" "}
                  <span>
                    <AiFillCaretRight />
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

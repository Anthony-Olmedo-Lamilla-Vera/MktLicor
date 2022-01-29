import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaSearchengin } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
function Navs({ setValue, setMenu_us }) {
  let user = true;
  return (
    <nav>
      <div className="nav-menu" onClick={() => setMenu_us(false)}>
        <button
          onClick={() => {
            setValue(true);
          }}
        >
          <RiMenuUnfoldFill size={25} color="#023047" />
        </button>
      </div>
      <div className="nav-form">
        <form action="">
          <input type="text" />
          <button>
            <FaSearchengin size={15} color="#023047" />{" "}
          </button>
        </form>
      </div>
      <div className="nav-profile">
        <Link to="/MktLicor/cart/">
          <button>
            <BsCartCheck size={25} color="#023047" />
          </button>
        </Link>
        <button onClick={() => setMenu_us(true)}>
          <AiOutlineUser size={25} color="#023047" />
        </button>
      </div>
    </nav>
  );
}

export default Navs;

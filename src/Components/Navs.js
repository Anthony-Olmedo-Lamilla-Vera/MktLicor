import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaSearchengin } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link, useHref, useNavigate } from "react-router-dom";
function Navs({ setValue, setMenu_us }) {
  const [ValueInputShop, setValueInputShop] = useState("");
  let user = true;
  const navigate = useNavigate();
  const SearchPress = (e) => {
    e.preventDefault();
    navigate("/MktLicor/shop/" + ValueInputShop);
  };
  return (
    <nav className="nav-navigation">
      <div className="nav-menu" onClick={() => setMenu_us(false)}>
        <button
          onClick={() => {
            setValue(true);
          }}
        >
          <RiMenuUnfoldFill size={25} color="#000" />
        </button>
      </div>
      <div className="nav-form">
        <form onSubmit={SearchPress}>
          <input
            value={ValueInputShop}
            onChange={(e) => setValueInputShop(e.target.value)}
            type="text"
            placeholder="digite su busqueda ..."
          />
          <button type="submit">
            <FaSearchengin size={15} color="#000" />{" "}
          </button>
        </form>
      </div>
      <div className="nav-profile">
        <Link to="/MktLicor/cart/">
          <button>
            <BsCartCheck size={25} color="#000" />
          </button>
        </Link>
        <button onClick={() => setMenu_us(true)}>
          <AiOutlineUser size={25} color="#000" />
        </button>
      </div>
    </nav>
  );
}

export default Navs;

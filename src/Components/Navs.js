import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaSearchengin } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link, useHref, useNavigate } from "react-router-dom";
import { useGetuser } from "../Hooks/useUser";
function Navs({ setValue, setMenu_us }) {
  const [ValueInputShop, setValueInputShop] = useState("");
  const { User } = useGetuser();
  let user = true;
  const navigate = useNavigate();
  const SearchPress = (e) => {
    e.preventDefault();
    navigate("/MktLicor/shop/" + ValueInputShop);
    setValueInputShop("");
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
        {User ? (
          <span onClick={() => setMenu_us(true)}>
            <div className="avatar-user">
              <img src={User.photoURL} alt="" />
            </div>
          </span>
        ) : (
          <Link to="/MktLicor/login">
            <button onClick={() => setMenu_us(true)}>
              <AiOutlineUser size={25} color="#000" />
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navs;

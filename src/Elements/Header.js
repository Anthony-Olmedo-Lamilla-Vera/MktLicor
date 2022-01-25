import React from "react";
import { Link } from "react-router-dom";
import Navs from "../Components/Navs";

function Header() {
  return (
    <>
      <header className="App-header">
        <div className="header-logo">
          <Link to="/MktLicor">
            <>
              <p>MKT</p>
              <span> of Likors</span>
            </>
          </Link>{" "}
        </div>
        <div className="header-info">
          <p>Ofertas!</p>
        </div>
      </header>
      <Navs />
    </>
  );
}

export default Header;

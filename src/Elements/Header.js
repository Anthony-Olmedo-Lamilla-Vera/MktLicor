import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="cont-header">
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
    </div>
  );
}

export default Header;

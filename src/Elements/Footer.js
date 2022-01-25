import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="cont-footer">
        <div className="title-footer">
          <p>Contactos</p>
        </div>
        <div className="icons-footer">
          <a href="" className="button-icon">
            <BsFacebook />
          </a>
          <a href="" className="button-icon">
            <BsWhatsapp />
          </a>
          <a href="" className="button-icon">
            <BsInstagram />
          </a>
          <a href="" className="button-icon">
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

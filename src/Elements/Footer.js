import React from "react";
import { BsGithub, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="cont-footer">
        <div className="title-footer">
          <p>Contactos</p>
        </div>
        <div className="icons-footer">
          <a
            href="https://api.whatsapp.com/send?phone=5930960847188&text=Que%20genial%20%20Web!"
            target="_blank"
            className="button-icon"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>

          <a
            rel="noreferrer"
            href="https://github.com/Antocraxx?tab=repositories"
            className="button-icon"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

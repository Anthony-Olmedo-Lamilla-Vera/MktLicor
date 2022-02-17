import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsTriangleFill } from "react-icons/bs";
import { useGetuser } from "../Hooks/useUser";

function Menuser() {
  const { User } = useGetuser();
  return (
    <div className="cont-menu-user">
      <section className="menu-user">
        <div className="design-menu">
          <BsTriangleFill color="#e5e5e5" size={20} />
        </div>
        <div className="title-menu-user">
          <div className="img-user">
            <div className="avatar-user">
              <img src={User && User.photoURL} alt="" />
            </div>
          </div>
          <div className="nombre-user">
            <p>{User && User.displayName}</p>
          </div>
        </div>
        <div className="datos-personales">
          <nav>
            <ul>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Libreta de Direccion</a>
              </li>
              <li>
                <a href="">Historial de Compras </a>
              </li>
              <li>
                <a href="">Productos Favoritos </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Menuser;

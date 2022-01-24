import "./App.css";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { FaSearchengin } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Card from "./Components/Card";
import CardNovedades from "./Components/Card_Novedades";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">
          <p>MKT</p> <span> of Likors</span>
        </div>
        <div className="header-info">
          <p>Ofertas!</p>
        </div>
      </header>
      <nav>
        <div className="nav-menu">
          <RiMenuUnfoldFill size={25} color="#023047" />
        </div>
        <div className="nav-form">
          <form action="">
            <input type="text" />
            <button>
              {" "}
              <FaSearchengin size={15} color="#023047" />{" "}
            </button>
          </form>
        </div>
        <div className="nav-profile">
          <button>
            <BsCartCheck size={25} color="#023047" />
          </button>
          <button>
            <AiOutlineUser size={25} color="#023047" />
          </button>
        </div>
      </nav>
      <section className="banner-suscripcion">
        <p className="title-banner">Unete a Nosotros !</p>
        <div className="text-banner">
          <p>Obten beneficios exclusivos de nuestro club </p>
          <p>Ademas obten descuentos y ofertas de temporadas ... </p>
          <form action="">
            <input type="text" />
            <button>
              <RiMailSendLine />
            </button>
          </form>
        </div>
      </section>
      <section className="section-categorias">
        <div className="title-categoria">
          <h3>Categorias de Licores </h3>
        </div>
        <div className="card-categoria">
          <Card />
          <Card />
        </div>
      </section>{" "}
      <section className="novedades">
        <div className="title-categoria">
          <h3>Nuevas Novedades </h3>
        </div>
        <div className="cont-card-novedades">
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
          <CardNovedades />
        </div>
      </section>
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
    </div>
  );
}

export default App;

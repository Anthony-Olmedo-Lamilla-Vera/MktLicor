import React from "react";
import { RiMailSendLine } from "react-icons/ri";

function HeroSubscription() {
  return (
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
  );
}

export default HeroSubscription;

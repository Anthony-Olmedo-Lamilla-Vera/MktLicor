import React, { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import axios from "axios";

function HeroSubscription() {
  const [Email, setEmail] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:2000/send/email/",
        {
          email: Email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setEmail("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="banner-suscripcion">
      <p className="title-banner">Unete a Nosotros !</p>
      <div className="text-banner">
        <p>Obten beneficios exclusivos de nuestro club </p>
        <p>Ademas obten descuentos y ofertas de temporadas ... </p>
        <form action="">
          <input
            placeholder="Digite su correo Electronico "
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <button onClick={sendEmail}>
            <RiMailSendLine />
          </button>
        </form>
      </div>
    </section>
  );
}

export default HeroSubscription;

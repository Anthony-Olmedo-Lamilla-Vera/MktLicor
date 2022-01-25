import React from "react";
import CardNovedades from "../Components/Card_Novedades";

function SectionNovedades() {
  return (
    <section className="novedades">
      <div className="title-categoria">
        <h3>Nuevas Novedades </h3>
      </div>
      <div className="cont-card-novedades">
        <CardNovedades />
        <CardNovedades />
        <CardNovedades />
        <CardNovedades />
      </div>
    </section>
  );
}

export default SectionNovedades;

import React from "react";
import Card from "../Components/Card";

function SectionCategoria() {
  return (
    <section className="section-categorias">
      <div className="title-categoria">
        <h3>Categorias de Licores </h3>
      </div>
      <div className="card-categoria">
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default SectionCategoria;

import React from "react";
import Card from "../Components/Card";
import { categorias } from "../Dates/ApiJson";

function SectionCategoria() {
  return (
    <section className="section-categorias">
      <div className="title-categoria">
        <h3>Categorias de Licores </h3>
      </div>
      <div className="card-categoria">
        <Card category={categorias.ron} nombre="Ron" />
        <Card category={categorias.champan} nombre="Champan" />
        <Card category={categorias.vino} nombre="Vino" />
        <Card category={categorias.tekila} nombre="Tekila" />
      </div>
    </section>
  );
}

export default SectionCategoria;

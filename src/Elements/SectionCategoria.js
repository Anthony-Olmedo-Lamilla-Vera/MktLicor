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
        <Card
          category={categorias.vodka}
          nombre="Vodka"
          img="https://laguarda.com.ec/wp-content/uploads/2017/12/absolut-1.jpg"
        />
        <Card
          category={categorias.champan}
          nombre="Champan"
          img="https://media.vogue.mx/photos/61bce8ff8d63291b60155baf/1:1/w_1080,h_1080,c_limit/moet-chandon-celebra-la-navidad-contigo.png"
        />
        <Card
          category={categorias.vino}
          nombre="Vino"
          img="https://cloudfront-us-east-1.images.arcpublishing.com/semana/EAWEZAG5V5FQXC2JXUHXWTLKLI.jpg"
        />
        <Card
          category={categorias.tekila}
          nombre="Tekila"
          img={"https://17doce.com/images/detailed/2/17Doce_YaloBox__21_.jpg"}
        />
      </div>
    </section>
  );
}

export default SectionCategoria;

import React from "react";
import Footer from "../Elements/Footer";
import HeroSubscription from "../Elements/HeroSubscription";
import SectionCategoria from "../Elements/SectionCategoria";
import SectionNovedades from "../Elements/SectionNovedades";

function Home() {
  return (
    <>
      <HeroSubscription />
      <SectionCategoria />
      <SectionNovedades />
    </>
  );
}

export default Home;

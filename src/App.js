import "./App.css";
import Header from "./Elements/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useState } from "react";
import Menu from "./Elements/Menu";
import Navs from "./Components/Navs";
import Menu_User from "./Elements/Menuser";
import Menuser from "./Elements/Menuser";
import Footer from "./Elements/Footer";
function App() {
  const [Value, setValue] = useState(false);
  const [Menu_us, setMenu_us] = useState(false);
  return (
    <>
      <div className="App">
        <Header />
        {Value ? <Menu setValue={setValue} /> : ""}
        <Navs Value={Value} setValue={setValue} setMenu_us={setMenu_us} />
        {Menu_us ? <Menuser /> : ""}
        <main onClick={() => setMenu_us(false)}>
          <Routes>
            <Route path="/MktLicor" exact element={<Home />} />
            <Route path="/MktLicor/cart/" exact element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

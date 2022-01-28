import "./App.css";
import Header from "./Elements/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useState } from "react";
import Menu from "./Elements/Menu";
import Navs from "./Components/Navs";
function App() {
  const [Value, setValue] = useState(false);
  return (
    <div className="App">
      <Header />
      {Value ? <Menu setValue={setValue} /> : ""}
      <Navs Value={Value} setValue={setValue} />
      <Routes>
        <Route path="/MktLicor" exact element={<Home />} />
        <Route path="/MktLicor/cart/" exact element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

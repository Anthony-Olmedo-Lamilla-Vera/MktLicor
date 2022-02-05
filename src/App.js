import "./App.css";
import Header from "./Elements/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useState } from "react";
import Menu from "./Elements/Menu";
import Navs from "./Components/Navs";
import Menuser from "./Elements/Menuser";
import Footer from "./Elements/Footer";
import Shop from "./Pages/Shop";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ReduceFunctions } from "./Dates/Reduces";
function App() {
  const [Value, setValue] = useState(false);
  const [Menu_us, setMenu_us] = useState(false);
  const store = createStore(ReduceFunctions);
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Header />
          {Value ? <Menu setValue={setValue} /> : ""}
          <Navs Value={Value} setValue={setValue} setMenu_us={setMenu_us} />
          {Menu_us ? <Menuser /> : ""}
          <main onClick={() => setMenu_us(false)}>
            <Routes>
              <Route path="/MktLicor" exact element={<Home />} />
              <Route path="/MktLicor/cart/" exact element={<Cart />} />
              <Route path="/MktLicor/shop/:name" exact element={<Shop />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;

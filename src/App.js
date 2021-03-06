import "./App.css";
import Header from "./Elements/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useState } from "react";
import Menu from "./Elements/Menu";
import Navs from "./Components/Navs";
import Menuser from "./Elements/Menuser";
import Footer from "./Elements/Footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ReduceFunctions } from "./Dates/Reduces";
import Searchproducts from "./Pages/Searchproducts";
import SearchCategory from "./Pages/SearchCategory";
import Agregate from "./Pages/Agregate";
import DesignCorreo from "./Elements/DesignCorreo";
import Login from "./Pages/Login";
function App() {
  const [Value, setValue] = useState(false);
  const [Menu_us, setMenu_us] = useState(false);
  const store = createStore(ReduceFunctions);
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Link to="/MktLicor/Agregate">Redirect Agregate</Link>
          <Header />
          {Value ? <Menu setValue={setValue} /> : ""}
          <Navs Value={Value} setValue={setValue} setMenu_us={setMenu_us} />
          {Menu_us ? <Menuser /> : ""}
          <main onClick={() => setMenu_us(false)}>
            <Routes>
              <Route path="/MktLicor" exact element={<Home />} />
              <Route path="/MktLicor/cart/" exact element={<Cart />} />
              <Route
                path="/MktLicor/shop/:name"
                exact
                element={<Searchproducts />}
              />
              <Route
                path="/MktLicor/shop/category/:category"
                exact
                element={<SearchCategory />}
              />
              <Route path="/MktLicor/Agregate" exact element={<Agregate />} />
              <Route path="/MktLicor/Login" exact element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;

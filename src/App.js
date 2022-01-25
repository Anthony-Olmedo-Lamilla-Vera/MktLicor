import "./App.css";
import Header from "./Elements/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/MktLicor" exact element={<Home />} />
        <Route path="/MktLicor/cart/" exact element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

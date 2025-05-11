import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Collection from "./pages/Collection";
import ScrollToTop from "./comp/ScrollToTop";
import Cart from "./comp/Cart";
import Board from "./comp/Board";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/collection/:cId" element={<Collection />}></Route>
        <Route path="/product/:pId" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/board" element={<Board />}></Route>
      </Routes>
    </>
  );
}

export default App;

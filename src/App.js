import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Collection from "./pages/Collection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/collection/:cId" element={<Collection />}></Route>
        <Route path="/Product/:pId" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;

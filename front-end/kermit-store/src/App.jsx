import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import KermitLogo from "/logo.png";
import "./App.css";

const App = () => {
  return (
    <div className="main container-fluid min-vh-100">
      <BrowserRouter>
        <div className="d-flex justify-content-center p-2 mt-2 mb-2">
          <Link to="/">
            <div className="d-flex align-items-center gap-2">
              <img className="img-fluid" src={KermitLogo} alt="main-logo" />
              <h1 className="m-0">Kermit Store</h1>
            </div>
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

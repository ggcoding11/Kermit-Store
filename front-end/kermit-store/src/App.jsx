import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KermitLogo from "/logo.png";
import "./App.css";

const App = () => {
  return (
    <div className="main container-fluid min-vh-100">
      <div className="d-flex justify-content-center p-2 mt-2 mb-2">
        <div className="d-flex align-items-center gap-2">
          <img className="img-fluid" src={KermitLogo} alt="main-logo" />
          <h1 className="m-0">Kermit Store</h1>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

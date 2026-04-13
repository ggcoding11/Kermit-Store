import React from "react";
import KermitLogo from "/logo.png";
import { MdSort } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import "../css/Home.css";

const Home = () => {
  return (
    <div className="container min-vh-100">
      <header className="d-flex justify-content-center p-2 mb-2">
        <div className="d-flex align-items-center gap-1">
          <img src={KermitLogo} alt="main-logo" />
          <h1>Kermit Store</h1>
        </div>
      </header>

      <section>
        <div className="row gy-2">
          <div className="col-12 col-sm-6 d-flex gap-2">
            <button type="button" className="btn btn-primary">
              New product
            </button>
            <button type="button" className="btn btn-secondary">
              <MdSort />
            </button>
          </div>
          <div className="col-12 col-sm-6 d-flex justify-content-end">
            <div className="search-bar input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search here!"
              />
              <span
                role="button"
                className="input-group-text"
                onClick={() => alert("Olá")}
              >
                <CiSearch />
              </span>
            </div>
          </div>
        </div>

        <div></div>

        <div></div>
      </section>
    </div>
  );
};

export default Home;

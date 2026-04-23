import React from "react";
import { MdSort } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../css/Home.css";
import { motion } from "framer-motion";
import { data } from "../data/Data";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container min-vh-100">
      <Header />
      <section>
        <div className="row gy-2 mb-4">
          <div className="col-12 col-sm-7 d-flex justify-content-center justify-content-sm-start gap-2">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              onClick={() => navigate("/create")}
            >
              New product
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
              title="Sort products"
            >
              <MdSort />
            </motion.button>
          </div>
          <div className="col-12 col-sm-5 d-flex justify-content-end">
            <div className="search-bar input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search here!"
              />
              <span
                role="button"
                className="input-group-text"
                title="Search the product"
                onClick={() => alert("Olá")}
              >
                <CiSearch />
              </span>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Category</th>
                    <th scope="col">Image</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((product) => (
                    <tr key={product.id}>
                      <th scope="row">{product.id}</th>
                      <td>{product.name}</td>
                      <td>{product.brand}</td>
                      <td>{product.category}</td>
                      <td>{product.image}</td>
                      <td>{product.createdAt}</td>
                      <td>{product.price}</td>
                      <td className="d-flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-primary"
                          onClick={() => navigate(`/update/${product.id}`)}
                        >
                          Edit
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-danger"
                        >
                          Delete
                        </motion.button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

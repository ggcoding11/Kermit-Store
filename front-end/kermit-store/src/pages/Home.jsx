import React from "react";
import { MdSort } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import "../css/Home.css";

const Home = () => {
  return (
    <div className="container min-vh-100">
      <section>
        <div className="row gy-2 mb-4">
          <div className="col-12 col-sm-7 d-flex justify-content-center justify-content-sm-start gap-2">
            <button type="button" className="btn btn-primary" title="Create a new product">
              New product
            </button>
            <button type="button" className="btn btn-secondary" title="Sort products">
              <MdSort />
            </button>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Image</td>
                    <td>2025-11-20</td>
                    <td>R$ 25,00</td>
                    <td className="d-flex gap-2">
                      <button
                        className="btn btn-primary"
                        title="Edit the product"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        title="Delete the product"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Image</td>
                    <td>2025-11-20</td>
                    <td>R$ 25,00</td>
                    <td className="d-flex gap-2">
                      <button
                        className="btn btn-primary"
                        title="Edit the product"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        title="Delete the product"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Image</td>
                    <td>2025-11-20</td>
                    <td>R$ 25,00</td>
                    <td className="d-flex gap-2">
                      <button
                        className="btn btn-primary"
                        title="Edit the product"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        title="Delete the product"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
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

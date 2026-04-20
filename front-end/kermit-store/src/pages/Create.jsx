import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import "../css/Create.css";

const Create = () => {
  const navigate = useNavigate();

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center">
      <h1 className="text-center mb-4">New product</h1>

      <form>
        <div className="mb-3">
          <label className="form-label w-100">
            Name:
            <input
              type="text"
              placeholder="Xbox 360"
              className="form-control"
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label w-100">
            Brand:
            <input
              type="text"
              placeholder="Microsoft"
              className="form-control"
            />
          </label>
        </div>

        <div className="row gy-3 mb-3">
          <div className="col-12 col-sm-6">
            <label className="form-label w-100">
              Price:
              <NumericFormat
                placeholder="R$ 0,00"
                prefix="R$ "
                decimalScale={2}
                fixedDecimalScale={true}
                allowNegative={false}
                thousandSeparator="."
                decimalSeparator=","
                className="form-control"
              />
            </label>
          </div>
          <div className="col-12 col-sm-6">
            <label className="form-label w-100">
              Category:
              <input
                type="text"
                placeholder="Eletronics"
                className="form-control"
              />
            </label>
          </div>
        </div>

        <div className="row gy-3 mb-3">
          <div className="col-12 col-sm-6">
            <label className="form-label w-100">
              Product image:
              <input className="form-control" type="file" />
            </label>
          </div>
          <div className="col-12 col-sm-6">
            <label className="form-label w-100">
              Quantity:
              <NumericFormat
                placeholder="0"
                allowNegative={false}
                decimalScale={0}
                className="form-control"
              />
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label w-100">
            Description:
            <textarea
              placeholder="The product includes: 1 console, 2 controllers, and 1 accessory (Kinect)."
              className="form-control"
            />
          </label>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-4">
          <button
            type="submit"
            className="btn-create btn btn-primary"
            title="Create product"
          >
            Create
          </button>

          <button
            onClick={() => navigate("/")}
            type="button"
            className="btn-cancel btn btn-danger"
            title="Cancel operation"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

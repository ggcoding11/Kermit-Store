import React from "react";
import "../css/Create.css"

const Create = () => {
  return (
    <div className="container">
      <h1 className="text-center">New product</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="product-name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="product-name" />
        </div>

        <div className="mb-3">
          <label htmlFor="product-brand" className="form-label">
            Brand
          </label>
          <input type="text" className="form-control" id="product-brand" />
        </div>

        <div className="row mb-3">
          <div className="col-12 col-sm-6">
            <label htmlFor="product-price" className="form-label">
              Price
            </label>
            <input type="number" className="form-control" id="product-price" />
          </div>
          <div className="col-12 col-sm-6">
            <label htmlFor="product-category" className="form-label">
              Category
            </label>
            <input type="text" className="form-control" id="product-category" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-sm-6">
            <label htmlFor="product-image" className="form-label">
              Product image
            </label>
            <input className="form-control" type="file" id="product-image" />
          </div>
          <div className="col-12 col-sm-6">
            <label htmlFor="product-quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="product-quantity"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="product-description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="product-description"
          />
        </div>

        <div className="d-flex justify-content-center align-items-center gap-4">
          <button type="submit" className="btn-create btn btn-primary">
            Submit
          </button>

          <button type="submit" className="btn-cancel btn btn-danger">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../data/Data";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(data.filter((p) => p.id == id));
  }, [id]);

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center p-2">
      <h1 className="text-center mb-4">Edit product</h1>

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
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-create btn btn-primary"
          >
            Update
          </motion.button>

          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="btn-cancel btn btn-danger"
          >
            Cancel
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Update;

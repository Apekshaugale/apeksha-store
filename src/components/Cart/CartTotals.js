import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const {
    cartSubTotal,
    cartTax,
    cartTotal,
    clearCart
  } = value;

  return (
    <div className="container my-5">
      <div className="row">

        <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-md-6 text-capitalize text-right">

          {/* Clear Cart Button */}
          <Link to="/">
            <button
              className="btn btn-danger text-uppercase px-4 py-2 mb-4"
              type="button"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </Link>

          {/* Price Details */}
          <div className="card shadow-sm p-4 border-0">

            <h5 className="mb-3">
              <span className="text-dark">
                Subtotal :
              </span>
              <strong> ₹ {cartSubTotal}</strong>
            </h5>

            <h5 className="mb-3">
              <span className="text-dark">
                Tax :
              </span>
              <strong> ₹ {cartTax}</strong>
            </h5>

            <h4 className="font-weight-bold">
              <span className="text-success">
                Total Amount :
              </span>
              <strong> ₹ {cartTotal}</strong>
            </h4>

          </div>
        </div>

      </div>
    </div>
  );
}
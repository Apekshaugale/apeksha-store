import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-4">
      <div className="row bg-light py-3 shadow-sm rounded">
        
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">
            Product Image
          </p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">
            Product Name
          </p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">
            Price
          </p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">
            Quantity
          </p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">
            Remove Item
          </p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">
            Total Amount
          </p>
        </div>

      </div>
    </div>
  );
}
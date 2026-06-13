import React from "react";

export default function EmptyCart() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">

        <div className="col-10 col-md-8 text-center">

          <div className="card shadow-sm border-0 p-5">

            <h1 className="display-5 text-danger mb-3">
              Your Cart is Empty
            </h1>

            <p className="text-muted">
              Looks like you haven't added any products yet.
            </p>

            <h5 className="mt-3">
              Continue shopping to add items to your cart.
            </h5>

          </div>

        </div>

      </div>
    </div>
  );
}
import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-4 text-center align-items-center border-bottom pb-3">

      {/* Product Image */}
      <div className="col-10 mx-auto col-lg-2 mb-2">
        <img
          src={img}
          style={{ width: "90px", height: "90px", objectFit: "contain" }}
          className="img-fluid rounded shadow-sm"
          alt={title}
        />
      </div>

      {/* Product Name */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none font-weight-bold">
          Product:
        </span>
        <p className="mb-0">{title}</p>
      </div>

      {/* Price */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none font-weight-bold">
          Price:
        </span>
        <p className="mb-0">₹ {price}</p>
      </div>

      {/* Quantity */}
      <div className="col-10 mx-auto col-lg-2 my-2">
        <div className="d-flex justify-content-center align-items-center">

          <button
            className="btn btn-outline-dark mx-1"
            onClick={() => decrement(id)}
          >
            -
          </button>

          <span className="btn btn-light mx-1">
            {count}
          </span>

          <button
            className="btn btn-outline-dark mx-1"
            onClick={() => increment(id)}
          >
            +
          </button>

        </div>
      </div>

      {/* Remove Item */}
      <div className="col-10 mx-auto col-lg-2">
        <button
          className="btn btn-danger"
          onClick={() => removeItem(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>

      {/* Total */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>Total: ₹ {total}</strong>
      </div>

    </div>
  );
}
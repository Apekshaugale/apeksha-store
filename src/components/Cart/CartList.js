import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;

  return (
    <div className="container py-4">
      <div className="cart-list-wrapper">

        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              value={value}
            />
          ))
        ) : (
          <div className="text-center py-5">
            <h4>Your shopping cart is empty</h4>
          </div>
        )}

      </div>
    </div>
  );
}
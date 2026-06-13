import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class ShoppingCart extends Component {
  render() {
    return (
      <section className="cart-section py-5">
        <ProductConsumer>
          {(value) => {
            const { cart } = value;

            return cart.length > 0 ? (
              <>
                {/* Cart Heading */}
                <Title name="Shopping" title="Cart" />

                {/* Cart Table Header */}
                <CartColumns />

                {/* Cart Products */}
                <CartList value={value} />

                {/* Cart Total Price */}
                <CartTotals
                  value={value}
                  history={this.props.history}
                />
              </>
            ) : (
              <EmptyCart />
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}
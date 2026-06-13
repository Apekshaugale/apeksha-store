import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = storeProducts.map(item => {
      return { ...item };
    });

    this.setState(
      () => {
        return { products };
      }
    );
  };

  getItem = (id) => {
    return this.state.products.find(item => item.id === id);
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.findIndex(item => item.id === id);

    let product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    this.setState(
      {
        products: tempProducts,
        cart: [...this.state.cart, product],
        detailProduct: product,
      },
      this.addTotals
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({
      modalProduct: product,
      modalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];

    const selected = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selected);

    let product = tempCart[index];

    product.count += 1;
    product.total = product.count * product.price;

    this.setState({ cart: tempCart }, this.addTotals);
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];

    const selected = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selected);

    let product = tempCart[index];

    product.count -= 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState({ cart: tempCart }, this.addTotals);
    }
  };

  getTotals = () => {
    let subTotal = this.state.cart.reduce((acc, item) => {
      return acc + item.total;
    }, 0);

    let tax = parseFloat((subTotal * 0.1).toFixed(2));
    let total = subTotal + tax;

    return { subTotal, tax, total };
  };

  addTotals = () => {
    const totals = this.getTotals();

    this.setState({
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    });
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];

    let index = tempProducts.findIndex(item => item.id === id);
    let removed = tempProducts[index];

    removed.inCart = false;
    removed.count = 0;
    removed.total = 0;

    let tempCart = this.state.cart.filter(item => item.id !== id);

    this.setState(
      {
        cart: tempCart,
        products: tempProducts,
      },
      this.addTotals
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: [],
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
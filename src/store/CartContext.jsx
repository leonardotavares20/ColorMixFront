import React from "react";

const CartContext = React.createContext({
  items: { cart: [], subtotal: 0 },
  addItem: (item) => {},
  removeItem: (id) => {},
  showPopup: false,
});

export default CartContext;

import CartContext from "./CartContext";
import { useReducer, useEffect, useState } from "react";

const defaultCart = {
  cart: [],
  subtotal: 0.0,
};

const cartReducer = (state, action) => {
  //ADD ITEMs

  if (action.type === "ADD") {
    const newSubtotal =
      Number(action.item.price) * action.item.amount + state.subtotal;

    const existingCartItemIndex = state.cart.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.cart[existingCartItemIndex];

    let updatedItems = [];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: action.item.amount + existingCartItem.amount,
      };

      updatedItems = [...state.cart];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.cart.concat(action.item);
    }

    localStorage.setItem(
      "cartSantaRita",
      JSON.stringify({ cart: updatedItems, subtotal: newSubtotal })
    );

    return { cart: updatedItems, subtotal: newSubtotal };
  }

  //REMOVE ITEM

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.cart.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.cart[existingCartItemIndex];

    const newSubtotal = state.subtotal - existingCartItem.price;

    let updatedItem;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.cart.filter((item) => item.id !== action.id);
    } else {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems = [...state.cart];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    localStorage.setItem(
      "cartSantaRita",
      JSON.stringify({ cart: updatedItems, subtotal: newSubtotal })
    );

    return { cart: updatedItems, subtotal: newSubtotal };
  }

  // LOAD ITEMS FROM LOCALSTORAGE

  if (action.type === "SET") {
    return { cart: action.data.cart, subtotal: action.data.subtotal };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);
  const [store, setStore] = useState(JSON.parse(localStorage.getItem("cart")));
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedCartData = localStorage.getItem("cartSantaRita");
    if (storedCartData) {
      dispatchCartAction({ type: "SET", data: JSON.parse(storedCartData) });
    }
  }, []);

  const addItemCartHandler = (item) => {
    setShowPopup(true);
    dispatchCartAction({ type: "ADD", item: item });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
    const updatedCart = cartState.cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const cartContext = {
    items: cartState,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
    showPopup: showPopup,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

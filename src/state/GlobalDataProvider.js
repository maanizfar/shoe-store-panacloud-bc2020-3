import React, { useReducer } from "react";
import GlobalContext, { initialState } from "./GlobalContext";
import reducer, {
  RECIEVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "./DataReducer";

const GlobalDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function recieveProducts(products) {
    dispatch({
      type: RECIEVE_PRODUCTS,
      payload: products,
    });
  }

  function addToCart(product) {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  }

  function removeFromCart(productID) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        recieveProducts,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalDataProvider;

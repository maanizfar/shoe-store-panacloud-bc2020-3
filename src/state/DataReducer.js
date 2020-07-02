export const RECIEVE_PRODUCTS = "RECIEVE_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export default (state, action) => {
  switch (action.type) {
    case RECIEVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.push(action.payload),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
};

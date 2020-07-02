export const RECIEVE_PRODUCTS = "RECIEVE_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const CANCEL_CART = "CANCEL_CART";

export default (state, action) => {
  switch (action.type) {
    case RECIEVE_PRODUCTS:
      // console.log("Recieved products: ", action.payload);
      return {
        ...state,
        products: action.payload,
      };

    case ADD_TO_CART:
      // If product is already in the cart, then increase it's items. Otherwise add new product in cart.

      let cart = [];
      if (state.cart.some((p) => p.id === action.payload.id)) {
        cart = state.cart.map((p) => {
          if (p.id === action.payload.id) {
            p.items++;
          }
          return p;
        });
      } else {
        cart = [...state.cart, action.payload];
      }

      // Decrease items_left of the product by 1.
      const products = state.products.map((p) => {
        if (p.id === action.payload.id) {
          if (p.items_left > 0) p.items_left--;
        }
        return p;
      });

      return {
        ...state,
        products,
        cart,
      };

    case CANCEL_CART:
      const prods = state.products.map((p) => {
        if (p.id === action.payload.id) {
          p.items_left += action.payload.items;
        }
        return p;
      });

      return {
        ...state,
        products: prods,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };

    default:
      return state;
  }
};

import { createContext } from "react";

export const initialState = {
  products: [],
  cart: [],
};

const GlobalContext = createContext(initialState);

export default GlobalContext;

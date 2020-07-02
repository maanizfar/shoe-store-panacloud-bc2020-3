import React, { useContext } from "react";
import CartItemCard from "./CartItemCard";
import GlobalContext from "../state/GlobalContext";

const CartItemList = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <>
      {cart.length > 0 ? (
        cart.map((product) => (
          <CartItemCard key={product.id} product={product} />
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
};

export default CartItemList;

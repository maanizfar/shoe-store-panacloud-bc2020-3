import React, { useContext } from "react";
import CartItemCard from "./CartItemCard";
import GlobalContext from "../../state/GlobalContext";
import { Typography } from "@material-ui/core";

const CartItemList = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <>
      {cart.length > 0 ? (
        cart.map((product) => (
          <CartItemCard key={product.id} product={product} />
        ))
      ) : (
        <div style={{ width: "100%" }}>
          <Typography color="error" variant="body1">
            Cart is empty
          </Typography>
        </div>
      )}
    </>
  );
};

export default CartItemList;

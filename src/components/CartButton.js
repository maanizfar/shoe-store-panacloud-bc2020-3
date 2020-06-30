import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.contrastText,
  },
}));

const CartButton = () => {
  const classes = useStyles();

  return (
    <IconButton>
      <ShoppingCartIcon className={classes.icon} />
    </IconButton>
  );
};

export default CartButton;

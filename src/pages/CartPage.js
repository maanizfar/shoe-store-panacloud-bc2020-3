import React, { useContext } from "react";

import CartItemList from "../components/Cart/CartItemList";
import { Grid, Typography, Container } from "@material-ui/core";
import OrderSummary from "../components/Cart/OrderSummary";
import { makeStyles } from "@material-ui/core/styles";
import GlobalContext from "../state/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
  },
  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: theme.spacing(4),
  },

  total: {
    marginBottom: theme.spacing(4),
  },
}));

const CartPage = () => {
  const classes = useStyles();
  const { cart } = useContext(GlobalContext);

  const prices = cart.map((p) => p.price * p.items);

  let totalPrice = 0;
  if (prices.length) totalPrice = prices.reduce((a, b) => a + b);

  return (
    <Container className={classes.root}>
      <Typography variant="h4" component="h4" className={classes.heading}>
        Your cart
      </Typography>
      <Typography variant="button" component="p" className={classes.total}>
        Total: <strong>${totalPrice}</strong>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <CartItemList />
        </Grid>
        <Grid item xs={12} md={4}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;

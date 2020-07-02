import React from "react";

import CartItemList from "../components/CartItemList";
import { Grid, Typography, Container } from "@material-ui/core";
import OrderSummary from "../components/OrderSummary";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

  return (
    <Container>
      <Typography variant="h4" component="h4" className={classes.heading}>
        Your cart
      </Typography>
      <Typography variant="button" component="p" className={classes.total}>
        Total: <strong>$625</strong>
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

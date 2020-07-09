import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GlobalContext from "../../state/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.grey[400]}`,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },

  checkoutBtn: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const OrderSummary = () => {
  const classes = useStyles();
  const { cart, cancelCartItem } = useContext(GlobalContext);

  const items = cart.map((p) => p.items);
  const prices = cart.map((p) => p.price * p.items);

  let numOfItems = 0;
  let totalPrice = 0;
  if (items.length) numOfItems = items.reduce((a, b) => a + b);
  if (prices.length) totalPrice = prices.reduce((a, b) => a + b);

  function handleCheckout() {
    cart.map((item) => cancelCartItem(item));
  }

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.heading}>
            Order Summary
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">{numOfItems} items</Typography>
          <Typography variant="button">${totalPrice}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">Delivery</Typography>
          <Typography variant="button">Free</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">Sales Tax</Typography>
          <Typography variant="button">-</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">Total</Typography>
          <Typography variant="button">${totalPrice}</Typography>
        </Grid>
      </Grid>
      <Button
        className={classes.checkoutBtn}
        variant="contained"
        color="secondary"
        fullWidth
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </>
  );
};

export default OrderSummary;

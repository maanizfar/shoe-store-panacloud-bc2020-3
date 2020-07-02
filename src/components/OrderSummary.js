import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  },
}));

const OrderSummary = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.heading}>
            Order Summary
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">4 items</Typography>
          <Typography variant="button">$625.00</Typography>
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
          <Typography variant="button">$625.00</Typography>
        </Grid>
      </Grid>
      <Button
        className={classes.checkoutBtn}
        variant="contained"
        color="primary"
        fullWidth
      >
        Checkout
      </Button>
    </>
  );
};

export default OrderSummary;

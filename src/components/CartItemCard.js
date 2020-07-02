import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 200,
    width: "100%",
    border: `1px solid ${theme.palette.text.secondary}`,
    position: "relative",
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.only("xs")]: {
      border: "none",
      backgroundColor: theme.palette.background.default,
      minHeight: 150,
    },
  },
  media: {
    width: "100%",
    height: "100%",

    [theme.breakpoints.only("xs")]: {
      height: "60%",
    },
  },
  content: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.only("xs")]: {
      color: "black",
    },
  },

  responsiveText: {
    fontSize: "1.2rem",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },

  blackOnXS: {
    [theme.breakpoints.down("xs")]: {
      color: theme.palette.text.primary,
      fontWeight: "bolder",
    },
  },

  cancelBtn: {
    position: "absolute",
    fontSize: "2rem",
    right: 2,
    top: 2,
  },
}));

const CartItemCard = () => {
  const classes = useStyles();
  const product = {
    id: 1,
    name: "Nike React Infinity Run Flyknit",
    brand: "NIKE",
    gender: "MEN",
    category: "RUNNING",
    price: 160,
    is_in_inventory: true,
    items_left: 3,
    items: 1,
    imageURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
  };

  return (
    <Grid container className={classes.root}>
      <IconButton color="inherit" className={classes.cancelBtn}>
        <CancelIcon />
      </IconButton>
      <Grid item xs={4}>
        <CardMedia
          className={classes.media}
          image={product.imageURL}
          title={product.name}
        />
      </Grid>

      <Grid item xs={8} className={classes.content}>
        <div>
          <Typography
            variant="h6"
            component="h3"
            color="textSecondary"
            className={classes.responsiveText}
          >
            {product.name}
          </Typography>
          <Typography variant="button" color="textSecondary" component="p">
            {product.brand}
          </Typography>
        </div>
        <div className={classes.bottomRow}>
          <Typography
            variant="button"
            color="textSecondary"
            className={clsx(classes.responsiveText, classes.blackOnXS)}
          >
            ${product.price}
          </Typography>
          <Typography
            variant="button"
            color="textSecondary"
            className={clsx(classes.responsiveText, classes.blackOnXS)}
          >
            Qty: {product.items}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
export default CartItemCard;

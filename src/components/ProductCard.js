import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 500,
    position: "relative",
  },
  media: {
    height: 380,

    [theme.breakpoints.down("md")]: {
      height: 260,
    },
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },

  addToCardBtn: {
    position: "absolute",
    fontSize: "2rem",
    right: 2,
    top: 2,
  },

  h3ResponsiveText: {
    [theme.breakpoints.only("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.9rem",
    },
  },

  btnResponsiveText: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.8rem",
    },
  },

  priceText: {
    paddingLeft: theme.spacing(2),
    position: "absolute",
    top: 14,
    left: 2,
  },
}));

const ProductCard = () => {
  const classes = useStyles();

  const [product, setProduct] = useState({
    name: "Nike React Infinity Run Flyknit",
    brand: "NIKE",
    gender: "MEN",
    category: "RUNNING",
    price: 160,
    is_in_inventory: true,
    items_left: 3,
    imageURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
  });

  return (
    <Card className={classes.root}>
      <Typography
        variant="h6"
        component="h3"
        className={clsx(classes.h3ResponsiveText, classes.priceText)}
        align="right"
      >
        ${product.price}
      </Typography>
      {product.items_left > 0 && (
        <IconButton color="inherit" className={classes.addToCardBtn}>
          <AddShoppingCartIcon />
        </IconButton>
      )}
      <CardMedia
        className={classes.media}
        image={product.imageURL}
        title={product.name}
      />
      <CardContent className={classes.cardContent}>
        <div>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            className={classes.h3ResponsiveText}
          >
            {product.name}
          </Typography>
          <Typography
            variant="button"
            color="textSecondary"
            component="p"
            className={classes.btnResponsiveText}
          >
            {product.brand}
          </Typography>
          {product.items_left > 0 ? (
            <>
              <Typography
                variant="button"
                color="textSecondary"
                component="p"
                className={classes.btnResponsiveText}
              >
                Items left: <strong>{product.items_left}</strong>
              </Typography>
            </>
          ) : (
            <Typography variant="button" color="error" component="p">
              Out of Stock
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    margin: 0,
    width: "100%",
  },
}));

const ProductGrid = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={6} md={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={6} md={4}>
        <ProductCard />
      </Grid>
    </Grid>
  );
};

export default ProductGrid;

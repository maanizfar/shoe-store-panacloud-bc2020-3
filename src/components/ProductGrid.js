import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    margin: 0,
    width: "100%",
  },
}));

const ProductGrid = ({ products }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      {products.length > 0 ? (
        products.map((product) => (
          <Grid key={product.id} item xs={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <div style={{ width: "100%" }}>
          <Typography
            color="error"
            variant="body1"
            style={{ textAlign: "center", padding: "1rem" }}
          >
            No product available
          </Typography>
        </div>
      )}
    </Grid>
  );
};

export default ProductGrid;

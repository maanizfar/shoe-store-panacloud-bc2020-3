import React, { useState, useContext } from "react";
import ProductGrid from "../components/ProductGrid";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import GlobalContext from "../state/GlobalContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "80vh",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: "92%",
    backgroundColor: "transparent",
    border: "none",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function getProductsByCategory(index, products) {
  switch (index) {
    case 0:
      return products;

    case 1:
      return products.filter((p) => p.category === "RUNNING");

    case 2:
      return products.filter((p) => p.category === "FOOTBALL");

    case 3:
      return products.filter((p) => p.category === "CASUAL");

    case 4:
      return products.filter((p) => p.category === "FORMAL");

    default:
      break;
  }
}

const ShopPage = ({ category }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { products } = useContext(GlobalContext);

  const allProductsForGender = products.filter(
    (p) => p.gender.toLowerCase() === category.toLowerCase()
  );

  const productsByCategory = getProductsByCategory(
    selectedIndex,
    allProductsForGender
  );

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {["All", "Running", "Football", "Casual", "Formal"].map(
                (text, index) => (
                  <ListItem
                    button
                    key={text}
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </div>
        </Drawer>
      </Hidden>
      <div style={{ width: "100%" }}>
        <ProductGrid products={productsByCategory} />
      </div>
    </div>
  );
};

export default ShopPage;

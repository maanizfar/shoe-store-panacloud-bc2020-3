import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import NavLink from "./NavLink";
import CartButton from "./CartButton";
import RightDrawer from "./RightDrawer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = (value) => {
    setDrawerOpen(value);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.container}>
          <img src="/logo.png" alt="logo" width="64px" />
          <Hidden xsDown>
            <div className={classes.links}>
              <NavLink name="Home" />
              <NavLink name="Men" />
              <NavLink name="Women" />
              <NavLink name="Kids" />
            </div>
          </Hidden>

          <div>
            <CartButton />

            <Hidden smUp>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => handleDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>

      <RightDrawer
        open={drawerOpen}
        onClickHandler={() => handleDrawerOpen(false)}
      />
    </>
  );
};

export default Navbar;

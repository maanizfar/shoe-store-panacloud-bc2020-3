import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";
import CartButton from "./CartButton";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
  },
  menuButton: {
    color: theme.palette.primary.contrastText,
  },
}));

const Navbar = ({ onMenuClickHandler }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.container}>
          <Link to="/">
            <img src="/logo.png" alt="logo" width="64px" />
          </Link>
          <Hidden xsDown>
            <div className={classes.links}>
              <NavLink name="Home" to="/" />
              <NavLink name="Men" to="men" />
              <NavLink name="Women" to="women" />
              <NavLink name="Kids" to="kids" />
            </div>
          </Hidden>

          <div>
            <CartButton />

            <Hidden smUp>
              <IconButton
                className={classes.menuButton}
                edge="end"
                aria-label="menu"
                onClick={onMenuClickHandler}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

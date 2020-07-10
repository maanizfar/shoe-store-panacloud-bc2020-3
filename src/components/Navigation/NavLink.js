import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  const pContrastText = theme.palette.primary.contrastText;

  return {
    container: {
      padding: theme.spacing(3),
      border: `0px solid transparent`,
      borderBottomWidth: "4px",
      color: pContrastText,
      textDecoration: "none",

      "&:hover": {
        cursor: "pointer",
        borderColor: theme.palette.grey[400],
      },
    },

    active: {
      borderColor: pContrastText,
    },
    nameText: {
      color: pContrastText,
      fontWeight: "bolder",
    },
  };
});

const NavLinkz = ({ name, to, end }) => {
  const classes = useStyles();

  return (
    <NavLink
      to={to}
      className={classes.container}
      activeClassName={classes.active}
      end={end}
    >
      <Typography variant="button" className={classes.nameText}>
        {name}
      </Typography>
    </NavLink>
  );
};

export default NavLinkz;

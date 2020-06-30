import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  const pContrastText = theme.palette.primary.contrastText;

  return {
    container: {
      padding: theme.spacing(2),
      border: `0px solid transparent`,
      borderBottomWidth: "2px",
      color: pContrastText,
      textDecoration: "none",

      "&:hover": {
        cursor: "pointer",
        borderColor: pContrastText,
      },
    },

    nameText: {
      color: pContrastText,
    },
  };
});

const NavLink = ({ name, to }) => {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.container}>
      <Typography className={classes.nameText}>{name}</Typography>
    </Link>
  );
};

export default NavLink;

import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    border: `0px solid transparent`,
    borderBottomWidth: "2px",
    color: theme.palette.primary.contrastText,
    textDecoration: "none",

    "&:hover": {
      cursor: "pointer",
      borderColor: theme.palette.primary.contrastText,
    },
  },
}));

const NavLink = ({ name, to }) => {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.container}>
      <Typography>{name}</Typography>
    </Link>
  );
};

export default NavLink;

import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    border: `0px solid transparent`,
    borderBottomWidth: "2px",

    "&:hover": {
      cursor: "pointer",
      borderColor: theme.palette.primary.contrastText,
    },
  },
}));

const NavLink = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography>{name}</Typography>
    </div>
  );
};

export default NavLink;

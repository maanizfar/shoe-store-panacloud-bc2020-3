import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    backgroundImage: 'url("bg.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.breakpoints.down("sm")]: {
      backgroundImage: 'url("bg_portrait.png")',
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default HomePage;

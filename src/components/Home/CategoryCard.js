import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(2),
    borderRadius: "8px",

    "&:hover": {
      cursor: "pointer",
    },
  },
  media: {
    height: 160,
  },

  cardContent: {
    // backgroundColor: theme.palette.secondary.main,
  },

  name: {
    textAlign: "center",
  },
}));

const CategoryCard = ({ name, imageURL, onClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardMedia className={classes.media} image={imageURL} title={name} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" component="h3" className={classes.name}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

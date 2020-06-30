import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FaMale, FaChild, FaFemale } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
}));

const Item = ({ name, icon, onClickHandler }) => (
  <ListItem button onClick={onClickHandler}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
);

const RightDrawer = ({ open, onClickHandler }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const iconSize = 24;

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClick={onClickHandler}
    >
      <List>
        <Item
          name="Home"
          icon={<HomeIcon />}
          onClickHandler={() => navigate("/")}
        />
        <Divider />
        <Item
          name="Men"
          icon={<FaMale size={iconSize} />}
          onClickHandler={() => navigate("men")}
        />
        <Item
          name="Women"
          icon={<FaFemale size={iconSize} />}
          onClickHandler={() => navigate("women")}
        />
        <Item
          name="Kids"
          icon={<FaChild size={iconSize} />}
          onClickHandler={() => navigate("kids")}
        />
      </List>
    </Drawer>
  );
};

export default RightDrawer;

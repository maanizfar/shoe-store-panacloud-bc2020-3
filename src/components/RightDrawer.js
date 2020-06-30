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

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
}));

const Item = ({ name, icon }) => (
  <ListItem button>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
);

const RightDrawer = ({ open, onClickHandler }) => {
  const classes = useStyles();
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
        <Item name="Home" icon={<HomeIcon />} />
        <Divider />
        <Item name="Men" icon={<FaMale size="24" />} />
        <Item name="Women" icon={<FaFemale size="24" />} />
        <Item name="Kids" icon={<FaChild size="24" />} />
      </List>
    </Drawer>
  );
};

export default RightDrawer;

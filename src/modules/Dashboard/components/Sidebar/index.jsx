import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import { useRemovedCount } from "../../hooks";

const useStyles = makeStyles(() => ({
  drawer: {
    width: 200,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerPaper: {
    width: "inherit",
    paddingTop: 64, // equal to AppBar height
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [count] = useRemovedCount();

  const secondaryText = `${count} items`;
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        <ListItem button component={RouterLink} to="/app/inbox">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button component={RouterLink} to="/app/personal">
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Personal" />
        </ListItem>
        <ListItem button component={RouterLink} to="/app/work">
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Work" />
        </ListItem>
        <ListItem button component={RouterLink} to="/app/removed">
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Removed" secondary={secondaryText} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

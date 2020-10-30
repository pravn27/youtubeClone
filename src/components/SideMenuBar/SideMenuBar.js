import React, { useState } from "react";
import clsx from "clsx";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
// Styled
import { SideMenuBarMUIStyled } from "./SideMenuBarStyled";

const SideMenuBar = ({ open }) => {
  const classes = SideMenuBarMUIStyled();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getSideMenuIcons = (index) => {
    switch (index) {
      case 0:
        return <HomeIcon />;
      case 1:
        return <WhatshotIcon />;
      case 2:
        return <SubscriptionsIcon />;
      case 3:
        return <VideoLibraryIcon />;
      case 4:
        return <HistoryIcon />;
      case 5:
        return <OndemandVideoIcon />;
      default:
        return <HomeIcon />;
    }
  };

  const handleSideMenuClick = (index) => setSelectedIndex(index);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx(classes.paperStyle, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <List>
        {["Home", "Trending", "Subscriptions"].map((text, index) => (
          <ListItem
            button
            key={text}
            classes={{
              root: classes.listItemStyle,
              selected: classes.selectedListItemStyle,
            }}
            onClick={() => handleSideMenuClick(index)}
            selected={selectedIndex === index}
          >
            <ListItemIcon
              classes={{
                root:
                  selectedIndex === index
                    ? classes.selectedListItemIconStyle
                    : classes.listItemIconStyle,
              }}
            >
              {getSideMenuIcons(index)}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider classes={{ root: classes.dividerStyle }} />
      <List>
        {["Library", "History", "Your videos"].map((text, index) => (
          <ListItem button key={text} className={classes.listItemStyle}>
            <ListItemIcon
              classes={{
                root: classes.listItemIconStyle,
              }}
            >
              {getSideMenuIcons(index + 3)}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider classes={{ root: classes.dividerStyle }} />
    </Drawer>
  );
};

export default SideMenuBar;

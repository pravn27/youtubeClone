import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Avatar,
  Button,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

// Components
import StyledLink from "../StyledLink/StyledLink";
// Styled
import { HeaderMUIStyled } from "./HeaderStyled";

const Header = ({ leftMostIconHandler }) => {
  const classes = HeaderMUIStyled();
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const searchTextHandle = (e) => setSearchText(e.target.value);

  const searchBtnClickHandle = () => history.push(`/searchPage/${searchText}`);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => leftMostIconHandler()}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h5" noWrap>
          <StyledLink to="/">YouTube</StyledLink>
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            value={searchText}
            onChange={searchTextHandle}
          />
        </div>
        <Button
          variant="contained"
          className={classes.searchBtn}
          onClick={searchBtnClickHandle}
          disabled={searchText.length > 4 ? false : true}
        >
          Search
        </Button>
        <div className={classes.rightSideIcon}>
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar></Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

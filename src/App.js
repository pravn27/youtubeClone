import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import SideMenuBar from "./components/SideMenuBar/SideMenuBar";
import HomePage from "./pages/HomePage/HomePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Styled
import { AppMUIStyled } from "./AppStyled";

const App = () => {
  const classes = AppMUIStyled();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(!open);

  return (
    <Router>
      <Header leftMostIconHandler={handleDrawerOpen} />
      <div className={classes.headerSpace}></div>
      <div className={classes.mainContainer}>
        <SideMenuBar open={open} />
        <Switch>
          <Route exact path="/youtubeClone" component={HomePage} />
          <Route
            exact
            path="/youtubeClone/videoPage/:id/:queryText"
            component={VideoPage}
          />
          <Route
            exact
            path="/youtubeClone/searchPage/:queryText"
            component={SearchPage}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

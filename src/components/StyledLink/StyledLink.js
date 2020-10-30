import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "inherit",
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
}));

const StyledLink = (props) => {
  const classes = useStyles();
  return <Link {...props} className={classes.root} />;
};

export default StyledLink;

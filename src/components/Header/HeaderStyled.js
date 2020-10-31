import { fade, makeStyles } from "@material-ui/core/styles";

export const HeaderMUIStyled = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffc107",
    color: "rgba(0, 0, 0, 0.87)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.4,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    border: "1px solid #424242",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "40%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBtn: {
    background: "#ffc107",
    textTransform: "unset",
    marginLeft: 10,
    border: "1px solid #424242",
    "&:hover": {
      background: "#ffc107",
    },
  },
  inputRoot: {
    color: "inherit",
    width: "98%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      //   width: "20ch",
    },
  },
  rightSideIcon: {
    display: "flex",
    alignItems: "center",
    flexGrow: "0.6",
    justifyContent: "flex-end",
    "& > *": {
      margin: theme.spacing(0, 1.3),
      cursor: "pointer",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
}));

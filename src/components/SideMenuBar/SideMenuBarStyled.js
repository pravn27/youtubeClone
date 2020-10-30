import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 200;
export const SideMenuBarMUIStyled = makeStyles((theme) => ({
  paperStyle: {
    backgroundColor: "#424242",
    color: "#fff",
    top: 64,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  listItemStyle: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  selectedListItemStyle: {
    color: "#ffc107 !important",
  },
  listItemIconStyle: {
    color: "#fff",
    minWidth: 42,
  },
  selectedListItemIconStyle: {
    color: "#ffc107",
    minWidth: 42,
  },
  dividerStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },
}));

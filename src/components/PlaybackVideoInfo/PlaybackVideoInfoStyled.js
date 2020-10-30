import { makeStyles } from "@material-ui/core/styles";

export const VideoInfoMUIStyled = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    opacity: 0.8,
  },
  dividerStyle: {
    backgroundColor: "#424242",
  },
  infoContent: {
    display: "flex",
    padding: 8,
    alignItems: "center",
  },
  videoTextContent: {
    marginLeft: 8,
    maxWidth: 240,
  },
  verifiedIcon: {
    width: 18,
    height: "auto",
    verticalAlign: "middle",
  },
  iconClass: {
    margin: theme.spacing(0, 1),
  },
  updateLikeClass: {
    color: "#ffc107",
  },
  countText: {
    fontSize: 16,
    marginLeft: 4,
  },
}));

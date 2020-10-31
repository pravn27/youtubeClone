import { makeStyles } from "@material-ui/core/styles";

export const MediaCardMUIStyled = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  media: {
    height: 168,
    width: 300,
  },
  infoContent: {
    display: "flex",
    padding: 8,
    backgroundColor: "#424242",
    color: "#fff",
  },
  videoTextContent: {
    marginLeft: 8,
    maxWidth: 240,
  },
  descriptionText: {
    display: "-webkit-box",
    "-webkitLineClamp": 2,
    "-webkitBoxOrient": "vertical",
    lineHeight: 1.3,
    overflow: "hidden",
    height: 40,
  },
  verticalDivider: {
    background: "#fff",
    height: 16,
    margin: "0 10px",
    display: "inline-block",
    verticalAlign: "middle",
  },
}));

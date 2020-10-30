import { makeStyles } from "@material-ui/core/styles";

export const UpNextMUIStyled = makeStyles((theme) => ({
  root: {
    width: "100%",
    opacity: 0.7,
    display: "flex",
    marginTop: 10,
    height: "8vw",
    "&:hover": {
      opacity: 1,
    },
  },
  media: {
    height: "auto",
    width: "100%",
    flex: 0.5,
  },
  infoContent: {
    padding: 8,
    backgroundColor: "#424242",
    color: "#fff",
    flex: 0.5,
  },
  descriptionText: {
    display: "-webkit-box",
    "-webkitLineClamp": 2,
    "-webkitBoxOrient": "vertical",
    lineHeight: 1.3,
    overflow: "hidden",
    "max-height": 40,
  },
  verticalDivider: {
    background: "#fff",
    height: 16,
    margin: "0 5px",
    display: "inline-block",
    verticalAlign: "middle",
  },
}));

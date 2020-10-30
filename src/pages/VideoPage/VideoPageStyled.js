import { makeStyles } from "@material-ui/core/styles";

export const VideoPageMUIStyled = makeStyles((theme) => ({
  videoPageContainer: {
    margin: 12,
  },
  iframeMedia: {
    width: "100%",
    height: 500,
    border: 0,
  },
  upNextTitleContainer: {
    color: "#ffc107",
    padding: "0 5px",
    background: "#424242",
    display: "-webkit-box",
    "-webkitLineClamp": 2,
    "-webkitBoxOrient": "vertical",
    lineHeight: 1.3,
    overflow: "hidden",
    "max-height": 65,
  },
  upNextSubtitle: {
    color: "#fff",
    opacity: 0.7,
    fontSize: 16,
  },
  nextUpVideoContainer: {
    maxHeight: "80vh",
    "overflow-y": "scroll",
    "overflow-x": "hidden",
  },
  nextUpGridMedia: {
    marginRight: 5,
  },
  playerInfoContainer: {
    margin: "20px 0",
  },
}));

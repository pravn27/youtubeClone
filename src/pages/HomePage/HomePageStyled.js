import { makeStyles } from "@material-ui/core/styles";

export const HomePageMUIStyled = makeStyles((theme) => ({
  homePageContainer: {
    margin: 12,
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "#ffc107",
  },
}));

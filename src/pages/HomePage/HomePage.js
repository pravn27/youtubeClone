import React, { useState, useEffect } from "react";
import YouTube from "youtube-sr";

import { Grid, CircularProgress } from "@material-ui/core";
// Components
import StyledLink from "../../components/StyledLink/StyledLink";
import MediaCard from "../../components/MediaCard/MediaCard";
// Styled
import { HomePageMUIStyled } from "./HomePageStyled";

const HomePage = () => {
  const [videoList, setVideoList] = useState([]);
  const classes = HomePageMUIStyled();

  const getVideos = (searchText) => {
    YouTube.search(searchText, { limit: 5 })
      .then((videos) => setVideoList((prevState) => [...prevState, ...videos]))
      .catch(console.error);
  };

  useEffect(() => {
    getVideos("Clever programming");
    getVideos("Traversy media");
    getVideos("sadhguru latest");
  }, []);

  return (
    <Grid container spacing={2} className={classes.homePageContainer}>
      {videoList.length > 0 ? (
        videoList.map((video, index) => (
          <Grid key={index} item>
            <StyledLink
              to={`/youtubeClone/videoPage/${video.id}/${video.title}`}
            >
              <MediaCard videoInfo={video} />
            </StyledLink>
          </Grid>
        ))
      ) : (
        <CircularProgress className={classes.loader} />
      )}
    </Grid>
  );
};

export default HomePage;

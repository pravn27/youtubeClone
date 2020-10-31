import React, { useState, useEffect } from "react";
import YouTube from "youtube-sr";

import { Grid, Typography } from "@material-ui/core";
// Components
import StyledLink from "../../components/StyledLink/StyledLink";
import MediaCard from "../../components/MediaCard/MediaCard";
// Styled
import { SearchPageMUIStyled } from "./SearchPageStyled";

const SearchPage = ({ match: { params } }) => {
  const classes = SearchPageMUIStyled();
  const [videoList, setVideoList] = useState([]);
  const searchText = params.queryText;

  useEffect(() => {
    YouTube.search(searchText, { limit: 20 })
      .then((videos) => setVideoList(videos))
      .catch(console.error);
  }, [searchText]);
  return (
    <div className={classes.searchPageContainer}>
      <Typography variant="h6" className={classes.searchHeading}>
        <span className={classes.searchSubtitle}>Search on </span>"{searchText}"
      </Typography>
      <Grid container spacing={2}>
        {videoList &&
          videoList.map((video, index) => (
            <Grid key={index} item>
              <StyledLink to={`/videoPage/${video.id}/${video.title}`}>
                <MediaCard videoInfo={video} />
              </StyledLink>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default SearchPage;

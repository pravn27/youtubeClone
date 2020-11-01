import React, { useState, useEffect } from "react";
import YouTube from "youtube-sr";

import { CardMedia, Grid, Typography, Paper } from "@material-ui/core";
// Components
import StyledLink from "../../components/StyledLink/StyledLink";
import UpNextMediaCard from "../../components/UpNextMediaCard/UpNextMediaCard";
import PlaybackVideoInfo from "../../components/PlaybackVideoInfo/PlaybackVideoInfo";
// Styled
import { VideoPageMUIStyled } from "./VideoPageStyled";

const VideoPage = ({ match: { params } }) => {
  const classes = VideoPageMUIStyled();
  const [videoList, setVideoList] = useState([]);
  const [playerInfo, setPlayerInfo] = useState(null);

  const videoId = params.id;
  const queryText = params.queryText;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  useEffect(() => {
    YouTube.search(params.queryText, { limit: 10 })
      .then((videos) => {
        setVideoList(videos);
        setPlayerInfo(videos.filter((video) => video.id === params.id)[0]);
      })
      .catch(console.error);
  }, [params]);

  return (
    <Grid container spacing={2} className={classes.videoPageContainer}>
      <Grid item md={8}>
        <CardMedia
          component="iframe"
          src={videoUrl}
          className={classes.iframeMedia}
        />
        {playerInfo && <PlaybackVideoInfo details={playerInfo} />}
      </Grid>
      <Grid item md={4}>
        <Paper className={classes.upNextTitleContainer}>
          <Typography variant="h6">
            <span className={classes.upNextSubtitle}>Up next </span>"{queryText}
            "
          </Typography>
        </Paper>
        <div className={classes.nextUpVideoContainer}>
          {videoList &&
            videoList.map((video, index) => (
              <Grid key={index} item className={classes.nextUpGridMedia}>
                <StyledLink
                  to={`/youtubeClone/videoPage/${video.id}/${video.title}`}
                >
                  <UpNextMediaCard videoInfo={video} />
                </StyledLink>
              </Grid>
            ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default VideoPage;

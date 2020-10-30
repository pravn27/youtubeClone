import React, { useState } from "react";
import numeral from "numeral";
import clsx from "clsx";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ShareIcon from "@material-ui/icons/Share";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {
  IconButton,
  Typography,
  Grid,
  Divider,
  CardContent,
  Avatar,
} from "@material-ui/core";
// Styled
import { VideoInfoMUIStyled } from "./PlaybackVideoInfoStyled";

const PlaybackVideoInfo = ({ details }) => {
  const classes = VideoInfoMUIStyled();
  const { title, views, uploadedAt, channel } = details;
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDisLikeCount] = useState(0);
  const viewsCount = numeral(views).format("0,0");
  return (
    <div className={classes.root}>
      <Typography variant="h6">{title}</Typography>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="subtitle2">
            {viewsCount} views - {uploadedAt}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            edge="start"
            color="inherit"
            className={clsx(classes.iconClass, {
              [classes.updateLikeClass]: likeCount > 0,
            })}
            onClick={() => setLikeCount((prevState) => prevState + 1)}
          >
            <ThumbUpAltIcon />
            <span className={classes.countText}>{likeCount}</span>
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.iconClass}
            onClick={() => setDisLikeCount((prevState) => prevState + 1)}
          >
            <ThumbDownIcon />
            <span className={classes.countText}>{dislikeCount}</span>
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.iconClass}
          >
            <ShareIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider light className={classes.dividerStyle} />
      <CardContent className={classes.infoContent}>
        <Avatar
          className="videCard__avatar"
          src={channel.icon.url}
          alt={channel.name}
        />
        <div className={classes.videoTextContent}>
          <Typography variant="subtitle1">
            {channel.name}{" "}
            {channel.verified && (
              <CheckCircleIcon className={classes.verifiedIcon} />
            )}
          </Typography>
          <Typography variant="subtitle2">12K subscribers</Typography>
        </div>
      </CardContent>
    </div>
  );
};

export default PlaybackVideoInfo;

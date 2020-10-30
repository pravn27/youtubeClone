import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core";
// Utils helpers
import { formatViewsCount, messageFormat } from "../../Utils/utilHelper";
// Styled
import { MediaCardMUIStyled } from "./MediaCardStyled";

const MediaCard = ({ videoInfo }) => {
  const classes = MediaCardMUIStyled();
  const { title, thumbnail, channel, uploadedAt, views } = videoInfo;
  const viewsCount = formatViewsCount(views, true, 1);
  const uploadedTime = messageFormat(uploadedAt);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={thumbnail.url}
          title={title}
        />
        <CardContent className={classes.infoContent}>
          <Avatar
            className="videCard__avatar"
            src={channel.icon.url}
            alt={channel.name}
          />
          <div className={classes.videoTextContent}>
            <Typography variant="subtitle1" className={classes.descriptionText}>
              {title}
            </Typography>
            <Typography variant="subtitle2">{channel.name}</Typography>
            <Typography variant="subtitle2">
              {viewsCount} views
              <Divider
                orientation="vertical"
                className={classes.verticalDivider}
              />
              {uploadedTime}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;

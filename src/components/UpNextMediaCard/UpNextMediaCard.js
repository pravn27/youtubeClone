import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
// Utils helpers
import { formatViewsCount, messageFormat } from "../../Utils/utilHelper";
// Styled
import { UpNextMUIStyled } from "./UpNextMediaCardStyled";

const UpNextMediaCard = ({ videoInfo }) => {
  const classes = UpNextMUIStyled();
  const { title, thumbnail, channel, uploadedAt, views } = videoInfo;
  const viewsCount = formatViewsCount(views, true, 1);
  const uploadedTime = messageFormat(uploadedAt);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={thumbnail.url}
        title={title}
      />
      <CardContent className={classes.infoContent}>
        <Typography variant="subtitle1" className={classes.descriptionText}>
          {title}
        </Typography>
        <Typography variant="subtitle2">{channel.name}</Typography>
        <Typography variant="subtitle2">
          {viewsCount} views
          <Divider orientation="vertical" className={classes.verticalDivider} />
          {uploadedTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UpNextMediaCard;

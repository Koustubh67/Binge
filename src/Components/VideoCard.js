import { height, Stack } from "@mui/system";
import React from "react";
import "./videocard.css";
const VideoCard = ({ id, image, title, channel, publishTime }) => {
  return (
    <Stack
      direction={"column"}
      key={id}
      sx={{
        overflow: "hidden",
        height: 280,
        width: { lg: 360, md: 250, sm: "100vw" },
      }}
    >
      <img src={image} style={{ height: "180px", width: "320px" }} alt="" />
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="channel">{publishTime.slice(0,10)}</div>
    </Stack>
  );
};

export default VideoCard;

import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
function VideoPage() {
  const {videoID} = useParams();
  
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactPlayer height= "60vh" width="60vw" controls url={`https://www.youtube.com/embed/${videoID}`} />
    </div>
  );
}

export default VideoPage;

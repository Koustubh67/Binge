import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import './Videopage.css'
function VideoPage() {
  const {videoID} = useParams();
  
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    > <div className="wrapper">
      <ReactPlayer height= "100%" width="100%" controls url={`https://www.youtube.com/embed/${videoID}`} />
      </div>
    </div>
  );
}

export default VideoPage;

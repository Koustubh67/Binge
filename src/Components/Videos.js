import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import fetch from "./fetchAPI";
import "./videos.css";
import axios from "axios";
import { useParams } from "react-router-dom";
function Videos({category}) {
  const {id}=useParams();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchUrl = async () => {
      if (id){
        const response = await axios.get(
          `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&maxResults=50`,{ 
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "1de65a0c08msh996f55a25a5f9fdp103f40jsn9062b3ae5e30",
              "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
             }
          })
          setData(response.data.items)
      }
      try {
        const response = await axios.get(
          "https://youtube-v31.p.rapidapi.com/search",
          fetch[category]
        );
        console.log(response.data.items);
        setData(response.data.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUrl();
  }, [category,id]);
  return (
    <Stack
      direction="row"
      sx={{
        padding: 2,
        gap: 2,
        alignContent: "flex-start",
        flexWrap: "wrap",
        flex: { lg: 0.9, md: 0.9, sm: 0.9, xs: 0.9 },
      }}
      className="video"
    >
      {data.map((item) => (
        <VideoCard
          publishTime={item?.snippet?.publishTime}
          id={item?.id?.videoId}
          channel={item?.snippet?.channelTitle}
          title={item?.snippet?.title}
          image={item?.snippet?.thumbnails?.medium?.url}
        />
      ))}
    </Stack>
  );
}

export default Videos;

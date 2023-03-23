import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoCard from "./VideoCard";
import fetch from "./fetchAPI";
import axios from "axios";
import { useParams } from "react-router-dom";
function Videos({ category,setLoading }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const handleClick = (event, id) => {
    event.preventDefault();
    navigate(`/video/${id}`);
    console.log(id);
  };

  useEffect(() => {
    const fetchUrl = async () => {
      setLoading(true)
      if (id) {
        const response = await axios.get(
          `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&maxResults=50`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "1de65a0c08msh996f55a25a5f9fdp103f40jsn9062b3ae5e30",
              "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
            },
          }
        );
        console.log(data);
        setData(response.data.items);
        setLoading(false)
      }
      try {
        const response = await axios.get(
          "https://youtube-v31.p.rapidapi.com/search",
          fetch[category]
        );
        console.log(response.data.items);
        setData(response.data.items);
        setLoading(false)
      } catch (err) {
       
      }
    };
    fetchUrl();
  }, [category, id]);
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "black",
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
          onClick={(event) => {
            handleClick(event, item?.id?.videoId);
          }}
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

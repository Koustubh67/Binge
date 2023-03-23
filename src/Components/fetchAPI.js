const fetch = {
  Music: {
    params: {
      q: "music",
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "1de65a0c08msh996f55a25a5f9fdp103f40jsn9062b3ae5e30",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  },
  Home: {
    params: {
      q: "india",
      regionCode: "US",
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "1de65a0c08msh996f55a25a5f9fdp103f40jsn9062b3ae5e30",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  },
  Podcasts: {
    params: {
      q: "Joe Rogan",
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "1de65a0c08msh996f55a25a5f9fdp103f40jsn9062b3ae5e30",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  },
  Sports: {
    params: {
      q: "sports",
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "1de65a0c08msh996f55a25a5f9fdp103f40jsn9062b3ae5e30",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  },
  Gaming: {
    params: {
      q: "gaming",
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "1de65a0c08msh996f55a25a5f9fdp103f40jsn9062b3ae5e30",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  },
  ReactJs: {
    params: {
      q: "reactjs",
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "1de65a0c08msh996f55a25a5f9fdp103f40jsn9062b3ae5e30",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  },
  Science: {
    params: {
      q: "science",
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "1de65a0c08msh996f55a25a5f9fdp103f40jsn9062b3ae5e30",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  },
};
export default fetch;

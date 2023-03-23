import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import { Stack } from "@mui/system";
import Videos from "./Components/Videos";
import VideoPage from "./Components/VideoPage";
import LinearProgress from "@mui/material/LinearProgress";
import ErrorPage from "./Components/ErrorPage";

import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <BrowserRouter>
        {loading && <LinearProgress color="secondary" />}

        <Navbar />
        <Stack
          direction={{ md: "column", lg: "row" }}
          sx={{ height: "fit-content" }}
        >
          <Sidebar />

          <Routes>
            <Route
              path="/Home"
              index
              element={<Videos setLoading={setLoading} category="Home" />}
            ></Route>

            <Route
              path="Music"
              element={<Videos setLoading={setLoading} category="Music" />}

            ></Route>
            <Route
              path="Podcasts"
              element={<Videos setLoading={setLoading} category="Podcasts" />}
            ></Route>
            <Route
              path="Gaming"
              element={<Videos setLoading={setLoading} category="Gaming" />}
            ></Route>
            <Route
              path="ReactJs"
              element={<Videos setLoading={setLoading} category="ReactJs" />}
            ></Route>
            <Route
              path="Science"
              element={<Videos setLoading={setLoading} category="Science" />}
            ></Route>
            <Route
              path="Sports"
              element={<Videos setLoading={setLoading} category="Sports" />}
            ></Route>
            <Route
              path="home/:id"
              element={<Videos setLoading={setLoading} />}
            ></Route>

            <Route path="video/:videoID" element={<VideoPage />}></Route>
            <Route path="/" index element={<Navigate to="/Home" />}></Route>
            <Route path="Error" element={<ErrorPage />}></Route>
            <Route path="*" element={<Navigate to="/Error" />}></Route>
          </Routes>
        </Stack>
      </BrowserRouter>
    </>
  );
}

export default App;

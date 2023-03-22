import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import { Stack } from "@mui/system";
import Videos from "./Components/Videos";
import VideoPage from "./Components/VideoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Stack
          direction={{ md: "column", lg: "row" }}
          sx={{ height: "fit-content" }}
        >
          <Sidebar />

          <Routes>
            <Route path="Home" element={<Videos category="Home" />}></Route>
            <Route path="Music" element={<Videos category="Music" />}></Route>
            <Route
              path="Podcasts"
              element={<Videos category="Podcasts" />}
            ></Route>
            <Route path="Gaming" element={<Videos category="Gaming" />}></Route>
            <Route
              path="ReactJs"
              element={<Videos category="ReactJs" />}
            ></Route>
            <Route
              path="Science"
              element={<Videos category="Science" />}
            ></Route>
            <Route path="Sports" element={<Videos category="Sports" />}></Route>
            <Route path="home/:id" element={<Videos />}></Route>
            <Route path='video/:videoID' element={<VideoPage/>}></Route>
            <Route path="*" element={<Navigate to="/Home" />}></Route>
            
          </Routes>
        </Stack>
      </BrowserRouter>
    </>
  );
}

export default App;

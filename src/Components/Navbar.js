import React, { useEffect, useState } from "react";
import { maxWidth, Stack } from "@mui/system";
import { useNavigate, Navigate } from "react-router-dom";
import image2 from "./logo_transparent.png";
import { TextField } from "@mui/material";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    if (search) {
      navigate(`/home/${search}`);
      setSearch("");
    }
  };
  const keyPress = (event) => {
    if (event.key === "Enter") {
      <Navigate to={`/home/${search}`} />;
    }
  };
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          padding:7,
          width: maxWidth,
          height: 80,
          position: "sticky",
          top: "0",
          backgroundColor: "black",
        }}
        alignItems="center"
        justifyContent={{ lg: "space-around", md:'space-around',xs: "center" }}
      >
        <img
          className="logo"
          onClick={() => {
            navigate(`/home`);
          }}
          src={image2}
          height='140px'
          width='140px'
          alt=""
        />

        <div style={{ marginRight: "10px", background: "white" }}>
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <div
                    onKeyDown={(event) => {
                      keyPress(event);
                    }}
                    onClick={(event) => {
                      handleClick(event);
                    }}
                  >
                    <SearchIcon sx={{ cursor: "pointer" }} />
                  </div>
                </InputAdornment>
              ),
            }}
            value={`${search}`}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            id="outlined-basic"
            sx={{ width: { lg: 600, md: 600, sm: "70vw", xs: "70vw" } }}
            placeholder="Search"
            variant="outlined"
          />
        </div>
      </Stack>
    </div>
  );
};

export default Navbar;

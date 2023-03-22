import React, { useState } from "react";
import { maxWidth, Stack, width } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate=useNavigate()
  const handleClick=(event)=>{
    event.preventDefault()
    if(search){
      navigate(`/home/${search}`)
      setSearch('')
    }
  }
  return (
    <Stack
      direction="row"
      sx={{
        width: maxWidth,
        height: 80,
        position: "sticky",
        top: "0",
        backgroundColor: "white",
      }}
      alignItems="center"
      justifyContent="space-around"
    >
      <div>
        <MenuIcon fontSize="large" />
      </div>
      <div>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <div onClick={(event)=>{handleClick(event)}}><SearchIcon sx={{ cursor: "pointer" }} /></div>
              </InputAdornment>
            ),
          }}
          value={`${search}`}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          id="outlined-basic"
          sx={{ width: { lg: 600, md: 600, sm: 500 } }}
          label="Search"
          placeholder="Search for the video"
          variant="outlined"
        />
      </div>
    </Stack>
  );
};

export default Navbar;

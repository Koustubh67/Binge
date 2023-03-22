import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./SidebarComponent.css";
const SidebarComponent = ({ title, icon }) => {
  return (
    <>
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
        to={`/${title}`}
      >
        {title}
        {icon}
      </NavLink>
    </>
  );
};

export default SidebarComponent;

import { Stack } from "@mui/material";
import React from "react";
import tulip from "../image/tulip.png";
import water from "../image/water.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Stack bgcolor="red" width="100%" height="150px" position="fixed">
      <Stack bgcolor="#FFF4FD" width="100%" height="35px"></Stack>
      <Stack
        direction="row"
        bgcolor="white"
        height="115px"
        justifyContent="space-between"
        padding="10px 140px 10px 140px"
        boxShadow="0px 10px 20px -10px #EAEAEA"
      >
        <img
          src={tulip}
          alt="tulip icon"
          width="100px"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          src={water}
          alt="water icon"
          width="160px"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/log");
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Header;

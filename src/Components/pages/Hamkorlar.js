import React from "react";
import SideNav from "../SideNav";
import { Box } from "@mui/material";
import Navbar from "../Navbar";
import HamkorlarList from "./Hamkolar/HamkorlarList";

export default function Hamkorlar() {
  return (
    <div className="bgColor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <HamkorlarList />
        </Box>
      </Box>
    </div>
  );
}

import React from "react";
import PlansOpening from "../pages_components/PlansOpening";
import PlansGrid from "../pages_components/PlansGrid";
import Box from "@mui/material/Box";

export default function Plans() {
  return (
    <Box sx={{ backgroundColor: "#a9dcf1" }}>
      <PlansOpening />

      <PlansGrid />
    </Box>
  );
}

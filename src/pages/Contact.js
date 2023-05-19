import React from "react";
import Box from "@mui/material/Box";
import "./styles.css";
import "../index.css";

export default function Contact() {
  return (
    
    <Box
      sx={{
        width: "100vw",
        height: "130%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        backgroundColor: "#46B4E0",
        paddingBottom: "100px"
      }}
    >
      <Box className="contact--pic" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfX5edo8DRP-uKdxXtovnPdqWyVpOX6YihthH7pckNqTAc0zQ/viewform?embedded=true"
        title="contact"
        width="700px"
        height="900"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style={{
          paddingTop: "30px",
          marginTop: "100px",
          marginBottom: "100px",
          borderRadius: "10px",
          backgroundColor: "#46B4E0",
        }}
      />
      <Box className="contact--pic--two" />
    </Box>
    
  );
}

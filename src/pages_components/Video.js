import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import "../pages/styles.css";
import "../index.css";

export default function Video() {
  return (
    <Box
      className="video--container"
      sx={{
        width: "100%",
        height: "100vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: "100px",
      }}
    >
      <h1
        className="heading montserrat video-header"
        style={{ fontSize: "2.5em", marign: "0" }}
      >
        I'll help achieve your dreams!
      </h1>
      <video width="80%" height="auto" controls>
        <source
          src="http://techslides.com/demos/sample-videos/small.ogv"
          type="video/ogg"
        />
        <source src="/build/videos/arcnet.io(7-sec).mp4" type="video/mp4" />
      </video>
      <Link component={RouterLink} to="/plans">
        <motion.button
          className="Grid-item-opening-button montserrat"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More!
        </motion.button>
      </Link>
    </Box>
  );
}

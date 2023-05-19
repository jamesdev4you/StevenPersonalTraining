import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import "../pages/styles.css";
import "../index.css";

export default function PlansOpening() {
  return (
    <Box className="plans--opening" sx={{ backgroundColor: "#46B4E0" }}>
      <Box className="plans--box">
        <h1 className="heading montserrat" style={{ textAlign: "center" }}>
          Enhance Cardio!
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Personalized Plan
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Aerobic Training
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Track Progress
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Anaerobic Training
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Interval Training
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ marginTop: "30px", textAlign: "center", width: "80%" }}
        >
          Starting at $30/mo
        </h1>
        <Link component={RouterLink} to="/contact">
          <motion.button
            className="Grid-item-opening-button montserrat"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ marginTop: "10px" }}
          >
            Start Today!
          </motion.button>
        </Link>
      </Box>
      <Box className="plans--box">
        <h1 className="heading montserrat" style={{ textAlign: "center" }}>
          Gain Muscle!
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Personalized Plan
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Home or Gym workouts
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Track Progress
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ In-person or Online
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Professional Assistance
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ marginTop: "30px", textAlign: "center", width: "80%" }}
        >
          Starting at $40/mo
        </h1>
        <Link component={RouterLink} to="/contact">
          <motion.button
            className="Grid-item-opening-button montserrat"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ marginTop: "10px" }}
          >
            Start Today!
          </motion.button>
        </Link>
      </Box>
      <Box className="plans--box">
        <h1 className="heading montserrat" style={{ textAlign: "center" }}>
          Lose Weight!
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Personalized Plan
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Scheduled meal plans
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Track Progress
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Grocery Lists
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ textAlign: "left", width: "80%" }}
        >
          ✓ Cook Videos
        </h1>
        <h1
          className="paragraph montserrat"
          style={{ marginTop: "30px", textAlign: "center", width: "80%" }}
        >
          Starting at $35/mo
        </h1>
        <Link component={RouterLink} to="/contact">
          <motion.button
            className="Grid-item-opening-button montserrat"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ marginTop: "10px" }}
          >
            Start Today!
          </motion.button>
        </Link>
      </Box>
    </Box>
  );
}

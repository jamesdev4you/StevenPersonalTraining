import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhoneIcon from "@mui/icons-material/Phone";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "../pages/styles.css";
import "../index.css";

export default function PlansGrid() {
  return (
    <Box className="plans--grid" sx={{ backgroundColor: "#46B4E0" }}>
      <Box className="plans--grid--header">
        <h1 className="heading montserrat" style={{ textAlign: "center" }}>
          TRANSFORMATIONS SUITED TO YOU!
        </h1>
      </Box>
      <Box className="plans--grid--pic--description">
        <Box className="plans--grid-description">
          <h1 className="montserrat grid--desciription--header">
            Personalized Workouts
          </h1>

          <h1 className="montserrat grid--desciription--paragraph">
            My workout programs are specifically designed based on YOUR selected
            preferences and goals. They are designed for everyone - men, women,
            beginners and advanced.
          </h1>
          <h1 className="montserrat grid--desciription--paragraph">
            The programs are updated monthly to ensure they are always
            challenging and get you the best results possible. With years of
            experience in the industry, you can trust my programs work.
          </h1>
          <Box className="grid--desciription--icon--list">
            <Box className="grid--desciription--icon--word">
              <HomeIcon className="grid--desciription--icon" />
              <p className="montserrat grid--desciription--word">
                Home or Gym Workouts!{" "}
              </p>
            </Box>
            <Box className="grid--desciription--icon--word">
              <MenuBookIcon className="grid--desciription--icon" />
              <p className="montserrat grid--desciription--word">
                Workout and Diet logs!
              </p>
            </Box>
            <Box className="grid--desciription--icon--word">
              <PhoneIcon className="grid--desciription--icon" />
              <p className="montserrat grid--desciription--word">
                Always a Call Away!
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="plans--grid--pic"></Box>
      </Box>
      <Box className="plans--grid--pic--description">
        <Box className="plans--grid--pic--two"></Box>
        <Box className="plans--grid-description second--description">
          <h1 className="montserrat grid--desciription--header">
            PERSONALIZED MEALS
          </h1>

          <h1 className="montserrat grid--desciription--paragraph">
            My meal plans will aid in transforming you into your dream body.
            Based on your personal goals, your meals will provide you with the
            required calories and macronutrient breakdowns you need.
          </h1>
          <h1 className="montserrat grid--desciription--paragraph">
            The programs are updated monthly to ensure they are always
            challenging and get you the best results possible. With years of
            experience in the industry, you can trust my programs work.
          </h1>
          <Box className="grid--desciription--icon--list">
            <Box className="grid--desciription--icon--word">
              <MonitorWeightIcon className="grid--desciription--icon" />
              <p className="montserrat grid--desciription--word">
                Lose Weight at Your Liking!{" "}
              </p>
            </Box>
            <Box className="grid--desciription--icon--word">
              <LocalDiningIcon className="grid--desciription--icon" />
              <p className="montserrat grid--desciription--word">
                Perfect Diets for You!
              </p>
            </Box>
            <Box className="grid--desciription--icon--word">
              <FitnessCenterIcon className="grid--desciription--icon" />
              <p className="montserrat grid--desciription--word">
                Get Stronger and Leaner!{" "}
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="plans--grid--header"
        sx={{ borderTop: "3px solid black", justifyContent: "start" }}
      >
        <h1 className="heading montserrat" style={{ textAlign: "center" }}>
          GET STARTED NOW!
        </h1>
        <Link component={RouterLink} to="/contact">
          <motion.button
            className="home-opening-button montserrat"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Set up Appointment
          </motion.button>
        </Link>
      </Box>
    </Box>
  );
}

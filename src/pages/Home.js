import React from "react";
import HomePageGrid from "../pages_components/HomePageGrid";
import Video from "../pages_components/Video";
import Testimonials from "../pages_components/Testimonials";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./styles.css";
import "../index.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box
      className="home-opening-background"
      sx={{ backgroundColor: "#46B4E0" }}
    >
      <Box className="home-container">
        <Box className="home-opening-text-and-button">
          <h1 className="montserrat heading">
            Lose Weight and Gain Confendece
          </h1>
          <h1 className="montserrat heading">
            With Your Own Personal Trainer!
          </h1>
          <h3 className="montserrat paragraph">
            Whether it's at home, or at the gym, I'll be here for you!
          </h3>
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
        <Box className="home-opening-pic-and-list">
          <Box className="home-opening-pic"></Box>
          <Box className="home-opening-list">
            <Box className="home-opening-list-item">
              <FitnessCenterIcon className="home-opening-list-item-icon" />
              <h3 className="montserrat paragraph">Gain Muscle</h3>
            </Box>
            <Box className="home-opening-list-item">
              <LocalDiningIcon className="home-opening-list-item-icon" />
              <h3 className="montserrat paragraph">Hone Nutrition</h3>
            </Box>
            <Box className="home-opening-list-item">
              <MonitorWeightIcon className="home-opening-list-item-icon" />
              <h3 className="montserrat paragraph">Loss Weight</h3>
            </Box>
          </Box>
        </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#26A7DA"
          fill-opacity="1"
          d="M0,192L13.3,181.3C26.7,171,53,149,80,117.3C106.7,85,133,43,160,32C186.7,21,213,43,240,42.7C266.7,43,293,21,320,26.7C346.7,32,373,64,400,106.7C426.7,149,453,203,480,186.7C506.7,171,533,85,560,80C586.7,75,613,149,640,181.3C666.7,213,693,203,720,181.3C746.7,160,773,128,800,112C826.7,96,853,96,880,90.7C906.7,85,933,75,960,74.7C986.7,75,1013,85,1040,101.3C1066.7,117,1093,139,1120,160C1146.7,181,1173,203,1200,197.3C1226.7,192,1253,160,1280,138.7C1306.7,117,1333,107,1360,128C1386.7,149,1413,203,1427,229.3L1440,256L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
        ></path>
      </svg>
      <Box className="grid-container">
        <HomePageGrid />
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ transform: "rotate(180deg)", backgroundColor: "#46B4E0" }}
      >
        <path
          fill="#26A7DA "
          fill-opacity="1"
          d="M0,128L20,122.7C40,117,80,107,120,96C160,85,200,75,240,80C280,85,320,107,360,101.3C400,96,440,64,480,85.3C520,107,560,181,600,181.3C640,181,680,107,720,74.7C760,43,800,53,840,74.7C880,96,920,128,960,144C1000,160,1040,160,1080,186.7C1120,213,1160,267,1200,250.7C1240,235,1280,149,1320,106.7C1360,64,1400,64,1420,64L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
      <Box sx={{ backgroundColor: "#46B4E0", height: "100vh", width: "100%" }}>
        <Video />
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#26A7DA"
          fill-opacity="1"
          d="M0,192L13.3,181.3C26.7,171,53,149,80,117.3C106.7,85,133,43,160,32C186.7,21,213,43,240,42.7C266.7,43,293,21,320,26.7C346.7,32,373,64,400,106.7C426.7,149,453,203,480,186.7C506.7,171,533,85,560,80C586.7,75,613,149,640,181.3C666.7,213,693,203,720,181.3C746.7,160,773,128,800,112C826.7,96,853,96,880,90.7C906.7,85,933,75,960,74.7C986.7,75,1013,85,1040,101.3C1066.7,117,1093,139,1120,160C1146.7,181,1173,203,1200,197.3C1226.7,192,1253,160,1280,138.7C1306.7,117,1333,107,1360,128C1386.7,149,1413,203,1427,229.3L1440,256L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
        ></path>
      </svg>
      <Box sx={{ backgroundColor: "#26A7DA", height: "100vh", width: "100%" }}>
        <Testimonials />
      </Box>
    </Box>
  );
}

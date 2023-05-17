import { React, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import "../pages/styles.css";
import "../index.css";

export default function HomePageGrid() {
  const [state, setState] = useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animationPic = useAnimation();

  useEffect(() => {
    if (inView) {
      setState(true);
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 2.3, bounce: 0.3 },
      });
      animationPic.start({
        x: 0,
        transition: { type: "tween", duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        x: state ? "0" : "-100vw",
      });
      animationPic.start({
        x: state ? "0" : "-100vw",
      });
    }
    console.log("use effect hook, inView=", inView);
  }, [inView]);

  return (
    <Box
      className="home-page-grid-container"
      sx={{
        width: "80%",
        height: "100vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="heading montserrat" style={{ textAlign: "center" }}>
        Plenty of options for you to choose! Make fitness work for you!
      </h1>

      <Box
        className="home-page-grid"
        sx={{
          width: "80%",
          height: "auto",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          gap: "50px",
          paddingTop: "50px",
        }}
        ref={ref}
      >
        <motion.div animate={animation}>
          <Card
            className="home-page-grid-card"
            sx={{ backgroundColor: "#46b4e0" }}
          >
            <CardContent
              className="grid-content"
              sx={{ padding: "0", margin: "0" }}
            >
              <div className="muscle-pic"></div>
              <h4 className="montserrat Grid-item-heading">Gain Muscle!</h4>
              <h5 className="montserrat Grid-item-paragraph">
                Gaining muscle can lead to increased strength, improved
                metabolism, better balance and coordination, and reduced risk of
                injury.
              </h5>
              <Link component={RouterLink} to="/plans">
                <motion.button
                  className="Grid-item-opening-button montserrat"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Choose plan!
                </motion.button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div animate={animation}>
          <Card
            className="home-page-grid-card"
            sx={{ backgroundColor: "#46b4e0" }}
          >
            <CardContent
              className="grid-content"
              sx={{ padding: "0", margin: "0" }}
            >
              <div className="blueberries-pic"></div>
              <h4 className="montserrat Grid-item-heading">Eat Healthy!</h4>
              <h5 className="montserrat Grid-item-paragraph">
                Eating a healthy diet can have numerous benefits, including
                improved physical healthy, mental health and energy!
              </h5>
              <Link component={RouterLink} to="/plans">
                <motion.button
                  className="Grid-item-opening-button montserrat"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Choose plan!
                </motion.button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div animate={animation}>
          <Card
            className="home-page-grid-card"
            sx={{ backgroundColor: "#46b4e0" }}
          >
            <CardContent
              className="grid-content"
              sx={{ padding: "0", margin: "0" }}
            >
              <div className="running-pic "></div>
              <h4 className="montserrat Grid-item-heading">Lose Weight!</h4>
              <h5 className="montserrat Grid-item-paragraph">
                Losing weight has numerous benefits, including improved overall
                health, increased energy and mobility, and improved sleep!
              </h5>
              <Link component={RouterLink} to="/plans">
                <motion.button
                  className="Grid-item-opening-button montserrat"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Choose plan!
                </motion.button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
}

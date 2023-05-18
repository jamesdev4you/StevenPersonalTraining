import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CallIcon from "@mui/icons-material/Call";
import CommuteIcon from "@mui/icons-material/Commute";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import "../pages/styles.css";
import "../index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../pages/styles.css";
import "../index.css";

export default function Video() {
  return (
    <Box
      className="video--container"
      sx={{
        width: "100%",
        height: "80vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: "10px",
      }}
    >
      <h1
        className="heading montserrat video-header"
        style={{ fontSize: "2.5em", marign: "0" }}
      >
        I'll help achieve your dreams!
      </h1>
      <Swiper
        className="swiper"
        breakpoints={{
          // when window width is >= 320px
          900: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          1050: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          1250: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          // when window width is >= 480px
          1600: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1700: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
          2000: {
            slidesPerView: 3,
            spaceBetween: 120,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Box className="icon--box">
            <AddCardIcon className="icon--swiper" />

            <h3 className="heading montserrat icon--header">Roland Sanchez</h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="icon--box">
            <AddHomeWorkIcon className="icon--swiper" />
            <h3
              className="heading montserrat icon--header"
              style={{ margin: "0", fontSize: "1.5em" }}
            >
              Roland Sanchez
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="icon--box">
            <AddTaskIcon className="icon--swiper" />
            <h3
              className="heading montserrat icon--header"
              style={{ margin: "0", fontSize: "1.5em" }}
            >
              Roland Sanchez
            </h3>
            <Box sx={{ width: "40%" }}></Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="icon--box">
            <CallIcon className="icon--swiper" />
            <h3
              className="heading montserrat icon--header"
              style={{ margin: "0", fontSize: "1.5em" }}
            >
              Roland Sanchez
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="icon--box">
            <CommuteIcon className="icon--swiper" />
            <h3
              className="heading montserrat icon--header"
              style={{ margin: "0", fontSize: "1.5em" }}
            >
              Roland Sanchez
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="icon--box">
            <EmojiEventsIcon className="icon--swiper" />
            <h3
              className="heading montserrat icon--header"
              style={{ margin: "0", fontSize: "1.5em" }}
            >
              Roland Sanchez
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="icon--box">
            <SportsGymnasticsIcon className="icon--swiper" />
            <h3
              className="heading montserrat icon--header"
              style={{ margin: "0", fontSize: "1.5em" }}
            >
              Roland Sanchez
            </h3>
          </Box>
        </SwiperSlide>
      </Swiper>
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

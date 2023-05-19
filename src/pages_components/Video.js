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
    <Box className="video--container">
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
            slidesPerView: 1,
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
            spaceBetween: 195,
          },
        }}
        grabCursor
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide style={{ width: "100%" }}>
          <Box className="icon--box">
            <AddCardIcon className="icon--swiper" />

            <h3 className="heading montserrat icon--header">
              Accepting any form of payment!
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="icon--box">
            <AddHomeWorkIcon className="icon--swiper" />
            <h3
              className="heading montserrat icon--header"
              style={{ margin: "0", fontSize: "1.5em" }}
            >
              Virtual or Real Life!
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
              Cash Back guarantee!
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
              813-445-8102
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
              Transportation
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
              Goals achieved!
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
              Imporve flexibilty!
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

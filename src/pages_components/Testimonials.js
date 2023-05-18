import Box from "@mui/material/Box";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "../pages/styles.css";
import "../index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Testimonials() {
  return (
    <Box
      sx={{
        margin: "auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        className="heading montserrat"
        style={{ fontSize: "2.3em", margin: "0px", textAlign: "center" }}
      >
        Testimonials From Happy Clients!
      </h1>
      <Swiper
        style={{
          height: "80%",
          minHeight: "400px",
          width: "60vw",
          minWidth: "350px",
          marginTop: "0px",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className="testimonial-opening-pic-1"
            sx={{ marginRight: "0", marginBottom: "20px" }}
          ></Box>
          <h3
            className="heading montserrat"
            style={{ margin: "0", fontSize: "1.5em" }}
          >
            Mitch Kandell
          </h3>
          <Box sx={{ width: "40%" }}>
            <h3 className="montserrat paragraph" style={{ fontSize: "1.3em" }}>
              ❝ He helped me a lot with losing weight and gaining muscle!
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className="home-opening-pic"
            sx={{ marginRight: "0", marginBottom: "20px" }}
          ></Box>
          <h3
            className="heading montserrat"
            style={{ margin: "0", fontSize: "1.5em" }}
          >
            Roland Sanchez
          </h3>
          <Box sx={{ width: "40%" }}>
            <h3 className="montserrat paragraph" style={{ fontSize: "1.3em" }}>
              ❝ He helped me a lot with losing weight and gainging confidence!
            </h3>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className="home-opening-pic"
            sx={{ marginRight: "0", marginBottom: "20px" }}
          ></Box>
          <h3
            className="heading montserrat"
            style={{ margin: "0", fontSize: "1.5em" }}
          >
            Roland Sanchez
          </h3>
          <Box sx={{ width: "40%" }}>
            <h3 className="montserrat paragraph" style={{ fontSize: "1.3em" }}>
              ❝ He helped me a lot with losing weight and gainging confidence!
            </h3>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

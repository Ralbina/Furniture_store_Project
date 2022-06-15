import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Home.css";

// import required modules
import { Navigation } from "swiper";
import carousel1 from "../../assets/image/corousel1.jpeg";
import carousel2 from "../../assets/image/corousel2.jpeg";
import carousel3 from "../../assets/image/corousel3.jpeg";
import carousel4 from "../../assets/image/corousel4.jpeg";
import carousel5 from "../../assets/image/corousel5.jpeg";
import carousel6 from "../../assets/image/corousel6.jpeg";
// import img1 from "../../assets/image/img1.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import img2 from "../../assets/image/img2.png";
export default function Home() {
  return (
    <>
      {/* Swiper */}
      <div sx={{ bgcolor: "white", color: "rgb(59 131 115)" }}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={carousel1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel6} />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* swiper */}
      <div className="container1">
        <div className="texts">
          <p className="bigText">We Help You Make Modern Furniture</p>
          <p className="text">
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer.
          </p>
        </div>
        {/* <div>
          <img src={img1} />
        </div> */}
      </div>
      <div className="container2">
        <p className="text">Trusted by 20,000+ companies</p>
        <div className="icons">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <TelegramIcon />
          <WhatsAppIcon />
        </div>
      </div>
      <div className="container3">
        <div className="text3">
          <p className="bigText">About Us</p>
          <p className="text">
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials
          </p>
          <p>Best Quality</p>
          <p>All of our furniture uses the best materials and choices</p>
          <p>Free Shpping</p>
          <p>All of our furniture uses the best materials and choices</p>
          <p>Free Shpping</p>
          <p>All of our furniture uses the best materials and choices</p>
        </div>
        <div>
          <img className="img2" src={img2} />
        </div>
      </div>
    </>
  );
}

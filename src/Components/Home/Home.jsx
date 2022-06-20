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
import img2 from "../../assets/image/img2.png";
import img3 from "../../assets/image/img3.png";
import img4 from "../../assets/image/img4.png";
import img5 from "../../assets/image/img5.png";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/image/img1.png";
import master from "../../assets/image/masterCard.png";
import paypal from "../../assets/image/paypal.png";
import stripe from "../../assets/image/stripe.png";
import uber from "../../assets/image/uber.png";
import visa from "../../assets/image/visa.png";
import airbnb from "../../assets/image/airbnb.png";
import ellipsl from "../../assets/image/EllipseLeft.png";
import ellipsr from "../../assets/image/EllipseRight.png";
import img7 from "../../assets/image/img7.png";
export default function Home() {
  return (
    <>
      {/* Swiper start */}
      <div
        sx={{
          bgcolor: "white",
          width: "100%",
          height: "80%",
        }}
      >
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
      {/* swiper end*/}
      <div className="container1">
        <div className="texts">
          <p className="bigText">We Help You Make Modern Furniture</p>
          <p className="text">
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer.
          </p>
        </div>
        <div>
          <img className="imgContainer1" src={img1} />
        </div>
      </div>
      <div className="container2">
        <div>
          <p className="text">Trusted by 20,000+ companies</p>
        </div>
        <div className="icons">
          <img className="cardsImg1" src={master} />
          <img className="cardsImg2" src={visa} />
          <img className="cardsImg3" src={paypal} />
          <img className="cardsImg4" src={stripe} />
          <img className="cardsImg5" src={uber} />
          <img className="cardsImg6" src={airbnb} />
        </div>
      </div>
      <div className="container3">
        <div className="text3">
          <p className="bigText">About Us</p>
          <p className="text">
            All of our furniture uses the best materials and choices for our
            customers.
          </p>
          <p>Best Quality</p>
          <p>All of our furniture uses the best materials and choices</p>
          <p>Free Shpping</p>
          <p>All of our furniture uses the best materials and choices</p>
          <p>Free Shpping</p>
          <p>All of our furniture uses the best materials and choices</p>
          <NavLink to="/aboutus">
            <Button className="btn" variant="contained">
              Read More
            </Button>
          </NavLink>
        </div>
        <div>
          <img className="img2" src={img2} />
          <img className="ellipsr" src={ellipsr} />
        </div>
      </div>

      <div className="container4">
        <div className="text4">
          <p className="bigText4">Our Popular Furniture</p>
          <p className="text">
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials and choices
            for our customers.
          </p>
        </div>
        <div className="cardsImg">
          <img className="img4" src={img3} />
          <img className="img4" src={img4} />
          <img className="img4" src={img5} />
        </div>
      </div>
      <div className="wrap">
        <NavLink to="/list">
          <button className="buttonWrap">Go To Shop</button>
        </NavLink>
      </div>

      <div className="container5">
        <div className="text5">
          <p className="bigText">Modern Patio Furniture + Decor</p>
          <p className="text">
            Modern Patio Furniture + Decor Modern outdoor furniture gives you
            the ability to truly enjoy the spring, summer, and fall. You can
            celebrate the warm months out on your patio with friends, family,
            and guests if you have the right patio furniture. Modern outdoor
            patio furniture combines your love for the great outdoors,
            entertaining, and modern design in one simple and sophisticated
            package. Modern outdoor furniture, like tables, chairs, chaise
            lounges, and sofas are a great way to relax in style and comfort. If
            you have a pool, then you can place outdoor lounge chairs around the
            perimeter so that you can cool off whenever you get too warm while
            sunbathing. The best modern outdoor furniture combines high-quality
            materials and simple, sophisticated design to create a modern patio
            where you’ll be proud to entertain your guests.
          </p>
        </div>
      </div>

      <div className="container6">
        <div>
          <img className="ellipsl" src={ellipsl} />
          <img className="img7" src={img7} />
        </div>
        <div className="text6">
          <p className="bigText">Our customers are verry importan to us</p>
          <p className="text">
            All of our furniture uses the best matials and choices for our
            customers.All of our furniture uses the best materials and choices
            for our customers.
          </p>
        </div>
      </div>
    </>
  );
}

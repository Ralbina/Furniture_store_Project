import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div>
      <div className="footer1">
        <div>
          <p className="bigText1">DudeShape</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore at dolore.
          </p>
          <p className="bigText1">Follow Us :</p>
          <div>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div>
          <p className="bigText1">Take a tour</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Product</p>
          <p>Support</p>
        </div>
        <div>
          <p className="bigText1">Our company</p>
          <p>About Us</p>
          <p>Blog</p>
          <p>Media</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p className="bigText1">Subscribe</p>
          <p>Subscribe to get the latest news from us</p>
        </div>
      </div>
      <p className="footer2">Copyright @ 2021. Crafted with love.</p>
    </div>
  );
};

export default Footer;

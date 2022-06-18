import { Button } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Dine.css";

const Done = () => {
  return (
    <div className="containerDone">
      <div className="textDone">
        <p className="bigText">
          You have successfully registered, please confirm your registration by
          e-mail.
        </p>
        <NavLink to="/login">
          <p
            className="pDone"
            //   onClick={() => {
            //     navigate("/");
            //   }}
          >
            Go to the main page
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Done;

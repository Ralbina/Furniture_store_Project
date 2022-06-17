import { Button } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Done = () => {
  return (
    <div>
      <div>
        <h1>Вы успешно зарегистрировались. Перейдите на главную страницу.</h1>
        <NavLink to="/">
          <Button
          //   onClick={() => {
          //     navigate("/");
          //   }}
          >
            Перейти на главную
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Done;

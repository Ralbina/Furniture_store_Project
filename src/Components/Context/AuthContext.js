import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AUTH_API } from "../../helpers/const";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const alertToastify = (e) => {
    toast.error(`${e}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const register = async (user) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("password_confirm", user.password_confirm);
    try {
      const res = await axios.post(
        `${AUTH_API}api/register/`,
        formData,
        config
      );
      console.log(res);
      //   alertToastify("All good");
      navigate("/done");
    } catch (e) {
      alertToastify(e);
      console.log(e);
      setError("error occured");
    }
  };

  //   const activation = async (code) => {
  //     const config = {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     };
  //     let formData = new FormData();
  //     formData.append("activate_code", code);
  //     navigate("/login");
  //     try {
  //       const res = await axios.get(
  //         `${AUTH_API}activate/${code}/`,
  //         {
  //           activate_code: code,
  //         },
  //         config
  //       );
  //       console.log(res);
  //     } catch (error) {
  //       setError("error activation");
  //     }
  //   };

  async function login(username, password) {
    console.log(username, password);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);
    try {
      let res = await axios.post(`${AUTH_API}api/login/`, formData, config);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setUser(username);
      navigate("/");
    } catch (error) {
      setError("error occured");
    }
  }

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${AUTH_API}api/token/refresh/`,
        {
          refresh: token.refresh,
        },
        {
          headers: { Authorization },
        }
      );
      localStorage.setItem(
        "token",
        JSON.stringify({
          refresh: token.refresh,
          access: res.data.access,
        })
      );

      let userName = localStorage.getItem("username");
      setUser(userName);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
  }

  const forgot_password = async (email) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("email", email);
    try {
      const res = await axios.post(
        `${AUTH_API}forgot-password/`,
        formData,
        config
      );
      console.log(res);
      //   alertToastify("All good");
      navigate("/done");
    } catch (e) {
      alertToastify(e);
      console.log(e);
      setError("error occured");
    }
  };

  const resetPassword = async (activate_code, password, password_confirm) => {
    console.log(activate_code, password, password_confirm);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("activate_code", activate_code);
    formData.append("password", password);
    formData.append("password_confirm", password_confirm);
    try {
      let res = await axios.post(
        `${AUTH_API}reset-password/`,
        formData,
        config
      );
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("activate_code", activate_code);
      setUser(activate_code);
      navigate("/");
    } catch (error) {
      setError("error occured");
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        error,
        register,
        // activation,
        login,
        checkAuth,
        logout,
        forgot_password,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

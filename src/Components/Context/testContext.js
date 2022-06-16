import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

export const authContext = createContext();

const API = "http://35.239.251.89/";

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = async (userData) => {
    // const config = {
    //   headers: { "Content-Type": "multipart/form-data" },
    // };
    // let formData = new FormData(); // встроенная функция которая возвращает готовый обьект
    // formData.append("username", user.email);
    // formData.append("password", user.password);
    // console.log(formData);

    try {
      // const res = await axios.post(`${API}register/`, formData, config);
      const res = await axios.post(`${API}register/`, userData);
      console.log(res);
      navigate("/login");
    } catch (e) {
      console.log(e);
      setError("error occured");
    }
  };
  // логинимся сразу после регистрации
  async function login(userInfo) {
    try {
      // let res = await axios.post(`${API}api/token/`, formData, config);
      let res = await axios.post(`${API}api/token/`, userInfo); // отправляем запрос на получение токена (пароль для сервера)
      localStorage.setItem("token", JSON.stringify(res.data)); // получили пароль (токен) и сохраняем его в локал сторэдж
      localStorage.setItem("username", userInfo.username); // на всякий случай юзера тоже сохраняем в локал сторэдж
      setUser(username); //  добавляем юзера в стейт, чтобы он стал глобально доступен. ЧТобы его можно было использовать в любом компоненте, достав из контекста useContext(authContext)
      navigate("/"); // при успешном логине выходим на главную страницу
    } catch (error) {
      setError("error occured"); // при ошибке добавляем в стейт ошибку
    }

    // // userInfo данные которые были взяты из компонента Login из его инпутов
    // // async function login(username, password) {
    // // console.log(username, password);
    // // const config = {
    // //   headers: { "Content-Type": "multipart/form-data" },
    // // };
    // // let formData = new FormData();
    // // formData.append("username", username);
    // // formData.append("password", password);

    // try {
    //     // let res = await axios.post(`${API}api/token/`, formData, config);
    //     let res = await axios.post(`${API}api/token/`, userInfo); // отправляем запрос на получение токена (пароль для сервера)
    //     localStorage.setItem("token", JSON.stringify(res.data)); // получили пароль (токен) и сохраняем его в локал сторэдж
    //     localStorage.setItem("username", userInfo.username); // на всякий случай юзера тоже сохраняем в локал сторэдж
    //     setUser(username); //  добавляем юзера в стейт, чтобы он стал глобально доступен. ЧТобы его можно было использовать в любом компоненте, достав из контекста useContext(authContext)
    //     navigate("/"); // при успешном логине выходим на главную страницу
    //   } catch (error) {
    //     setError("error occured"); // при ошибке добавляем в стейт ошибку
    //   }
  }

  // функцию нужно будет вызывать в набваре в useEffect(() => { checkAuth() }, []), для того чтобы обновлять токен. Елси токен умер, то чтобы пришел новый токен
  async function checkAuth() {
    // проверка на то, залогинен ли пользователь
    // для крада
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}api/token/refresh/`,
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

  // выход из системы, больше не сможете что-то создавать, так как токен был уничтожен
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
  }

  const addProduct = async (newProd) => {
    try {
      let token = JSON.parse(localStorage.getItem("token")); //!
      const Authorization = `Bearer ${token.access}`; //!
      const res = await axios.post("http://44.202.84.170/products/", obj, {
        headers: { Authorization }, //!
      });
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        user,
        error,
        checkAuth,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

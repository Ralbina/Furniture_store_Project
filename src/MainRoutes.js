import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddProduct from "./Components/Admin/AddProduct";
import EditProduct from "./Components/Admin/EditProduct";
import Done from "./Components/Auth/Done";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Login from "./Components/Auth/Login";
import PasswordRecovery from "./Components/Auth/PasswordRecovery";
import Registration from "./Components/Auth/Registration";
import Cart from "./Components/Cart/Cart";
import { useAuth } from "./Components/Context/AuthContext";
import Favorite from "./Components/Favorite/Favorite";
import Home from "./Components/Home/Home";
import Furniture from "./Components/LightFurniture/Furniture";
import LightFurniture from "./Components/LightFurniture/LightFurniture";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductList from "./Components/ProductList/ProductList";
import Payment from "./Components/Payment/Payment";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/done" element={<Done />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<PasswordRecovery />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/light" element={<LightFurniture />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default MainRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct";
import EditProduct from "./Components/Admin/EditProduct";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductList from "./Components/ProductList/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;

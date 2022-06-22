import React, { useContext } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useState } from "react";
import "./ProductDetails.css";
import { cartContext } from "../Context/CartContext";
import { favoriteContext } from "../Context/FavoriteContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAuth } from "../../Components/Context/AuthContext";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductDetails = ({ item }) => {
  const { addProductToCart } = useContext(cartContext);
  const { addProductToFavorite } = useContext(favoriteContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const { userName } = useAuth();

  const { getProductDetails, productDetails, deleteProduct, like } =
    useProducts();

  useEffect(() => {
    getProductDetails(id);
    like(id).then((productDetails) => {
      if (productDetails) {
        setLiked(true);
      }
    });
  }, []);
  console.log(productDetails.liked_by_user, "details");
  const [liked, setLiked] = useState(false);
  const [clear, setClear] = useState("");

  const handleInp = (e) => {
    let id2 = Number(id);
    let obj = {
      product: id2,
      text: e.target.value,
    };

    setClear(e.target.value);
  };

  // const likeProduct = (id) => {
  //   like(id);
  //   getProductDetails(id);
  // };

  const clearInp = (e) => {
    setClear("");
  };

  // console.log('like', like(id));
  return (
    <>
      <div className="detailsCard">
        <div className="containerTopicDetails">
          <div data-aos="fade-right" className="containerTopicDetailsLeft">
            <img id="imgCards" src={productDetails.image} alt="img" />
          </div>
          <div data-aos="fade-left" className="containerTopicDetailsRight">
            <div className="contImg"></div>
            <p className="topicDetailsPT1">{productDetails.name}</p>
            <h3 className="topicDetailsH3">{productDetails.manufacture}</h3>
            <p className="topicDetailsPT1">{productDetails.description}</p>
            <p
              style={{ fontSize: "30px", fontWeight: "bold" }}
              className="topicDetailsPT1"
            >
              {productDetails.price}
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="topicDetailsButtons">
          <Button onClick={() => addProductToCart(productDetails)}>
            <AddShoppingCartIcon sx={{ fontSize: 50, color: "#154444" }} />
          </Button>
          <Button
            onClick={() => addProductToFavorite(productDetails)}
            aria-label="add to favorites"
          >
            <FavoriteIcon sx={{ fontSize: 50, color: "#154444" }} />
          </Button>

          <IconButton onClick={() => like(id)}>
            <ThumbUpIcon
              color={productDetails.liked_by_user ? "error" : "success"}
              sx={{ fontSize: 50 }}
            />
            {/* <FavoriteBorderIcon /> */}

            <Typography>{productDetails.like}</Typography>
          </IconButton>

          {user === "admin@admin.com" ? (
            <Button
              onClick={() => navigate(`/edit/${id}`)}
              className="btnCrud"
              id="edit"
            >
              <EditIcon sx={{ fontSize: 50, color: "#154444" }} />
            </Button>
          ) : null}
          {user === "admin@admin.com" ? (
            <Button
              className="btnCrud"
              id="del"
              onClick={() => {
                deleteProduct(id);
                navigate("/list");
              }}
            >
              <DeleteIcon sx={{ fontSize: 50, color: "#154444" }} />
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

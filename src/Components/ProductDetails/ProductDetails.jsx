import React, { useContext } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useState } from "react";
import trash from "../../assets/image/trash.svg";
import edit from "../../assets/image/edit.svg";
import "./ProductDetails.css";
import { cartContext } from "../Context/CartContext";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { favoriteContext } from "../Context/FavoriteContext";

const ProductDetails = ({ item }) => {
  const { id } = useParams();

  const {
    getProductDetails,
    productDetails,
    deleteProduct,
    like,
    getComments,
    comments,
    addComment,
    deleteComment,
  } = useProducts();

  const { addProductToCart } = useContext(cartContext);
  const { addProductToFavorite } = useContext(favoriteContext);

  useEffect(() => {
    getProductDetails(id);
    // getComments(id);
  }, []);
  const navigate = useNavigate();

  const [com, setCom] = useState("");

  const [clear, setClear] = useState("");

  // useEffect(() => {
  //   getProductDetails(id);
  //   getComments(id);
  // }, [comments]);

  console.log(item);

  const handleInp = (e) => {
    let id2 = Number(id);
    let obj = {
      product: id2,
      text: e.target.value,
    };
    setCom(obj);
    setClear(e.target.value);
  };

  const clearInp = (e) => {
    setClear("");
  };

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
          {/* //!!!!!!!!!!!!!!!!! изменения в edit / delete и добавила addProductToCart */}

          <Button
            onClick={() => addProductToFavorite(item)}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </Button>
          <Button
            onClick={() => {
              addProductToCart(productDetails);
              navigate("/list");
            }}
            variant="contained"
            color="secondary"
            startIcon={<AddShoppingCartIcon />}
            fullWidth={true}
            sx={{ mt: "20px", height: "50px" }}
          >
            Add to Cart
          </Button>
          <Button
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
            className="btnCrud"
            id="edit"
          >
            <img src={edit} alt="edit" />
          </Button>
          <Button
            className="btnCrud"
            id="del"
            onClick={() => {
              deleteProduct(id);
              navigate("/list");
            }}
          >
            <img src={trash} alt="trash" />
          </Button>
          {/* <NavLink to={`/edit/${id}`}>
            <button className="btnCrud" id="edit">
              <img src={edit} alt="edit" />
            </button>
          </NavLink> */}
          {/* <NavLink to="/list">
            <button
              className="btnCrud"
              id="del"
              onClick={() => deleteProduct(id)}
            >
              <img src={trash} alt="trash" />
            </button>
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

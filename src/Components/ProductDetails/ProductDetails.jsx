import React from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useState } from "react";
import trash from "../../assets/image/trash.svg";
import edit from "../../assets/image/edit.svg";
import "./ProductDetails.css";

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

  useEffect(() => {
    getProductDetails(id);
    // getComments(id);
  }, []);

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
          <NavLink to={`/edit/${id}`}>
            <button className="btnCrud" id="edit">
              <img src={edit} alt="edit" />
            </button>
          </NavLink>
          <NavLink to="/list">
            <button
              className="btnCrud"
              id="del"
              onClick={() => deleteProduct(id)}
            >
              <img src={trash} alt="trash" />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

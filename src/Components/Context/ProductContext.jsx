import axios from "axios";
import { ACTIONS, API } from "../../helpers/const";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useReducer } from "react";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
  comments: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case ACTIONS.GET_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [count, setCount] = useState(1);

  const getProducts = async () => {
    const { data } = await axios(`${API}/?page=${page}`);
    setCount(Math.ceil(data.count / 3));
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };
  // console.log(getProducts());

  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}/${id}/`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const Authorization = `Bearer ${token.access}`;
    console.log(Authorization);
    let newProduct2 = new FormData();
    newProduct2.append("name", newProduct.name);
    newProduct2.append("type", newProduct.type);
    newProduct2.append("price", newProduct.price);
    newProduct2.append("manufacture", newProduct.manufacture);
    newProduct2.append("description", newProduct.description);
    newProduct2.append("image", newProduct.image);

    await axios.post(`${API}/`, newProduct2, {
      headers: { Authorization },
    });
    getProducts();
  };

  const deleteProduct = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const Authorization = `Bearer ${token.access}`;

    await axios.delete(`${API}/${id}/`, {
      headers: { Authorization },
    });
    getProducts();
  };

  const saveEditedProduct = async (newProduct) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const Authorization = `Bearer ${token.access}`;

    // const config ={
    //     headers: {'Content-Type':'multipart/form-data'}
    //   }

    let newEditProduct = new FormData();
    newEditProduct.append("name", newProduct.name);
    newEditProduct.append("type", newProduct.type);
    newEditProduct.append("price", newProduct.price);
    newEditProduct.append("manufacture", newProduct.manufacture);
    newEditProduct.append("description", newProduct.description);
    newEditProduct.append("id", newProduct.id);
    if (typeof newProduct.image !== "string") {
      newEditProduct.append("image", newProduct.image);
    }
    let id = newEditProduct.get("id");

    await axios.patch(`${API}/${id}/`, newEditProduct, {
      headers: { Authorization },
    });
    getProducts();
  };

  //   const fetchByParams = async (value) => {
  //     if (value === "all") {
  //       getProducts();
  //     } else if (value === "5" || value === "7" || value === "10") {
  //       const { data } = await axios(
  //         `http://34.88.61.26/api/v1/doctors/?experience_min=${value}`
  //       );
  //       console.log(value);
  //       console.log(data);
  //       dispatch({
  //         type: ACTIONS.GET_PRODUCTS,
  //         payload: data,
  //       });
  //     } else {
  //       const { data } = await axios(
  //         `http://34.88.61.26/api/v1/doctors/?speciality=${value}`
  //       );

  //       dispatch({
  //         type: ACTIONS.GET_PRODUCTS,
  //         payload: data,
  //       });
  //     }
  //   };

  const fetchByParams = async (query, value) => {
    if (value === "all") {
      getProducts();
    } else {
      const { data } = await axios(`${API}filter/?${query}=${value}`);

      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    }
  };

  const searchFilter = async (value) => {
    const { data } = await axios(`${API}/search/?q=${value}`);

    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
    console.log(data);
  };

  const like = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${token.access}`;
    const count = await axios(`${API}/${id}/toggle_like`, {
      headers: { Authorization },
    });
    console.log(count);
    getProducts();
  };

  const getComments = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${token.access}`,
      },
    };
    let { data } = await axios(`${API}${id}`);

    dispatch({
      type: ACTIONS.GET_COMMENTS,
      payload: data,
    });
  };
  const addComment = async (c) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    let newComment = new FormData();

    newComment.append("product", c.product);
    newComment.append("text", c.text);

    await axios.post(`${API}comments/`, newComment, config);
  };

  const deleteComment = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    await axios.delete(`${API}comments/${id}/`, config);
  };
  return (
    <productContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        addProduct,
        getProducts,
        getProductDetails,
        saveEditedProduct,
        deleteProduct,
        setPage,
        page,
        count,
        fetchByParams,
        searchFilter,
        like,
        getComments,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;

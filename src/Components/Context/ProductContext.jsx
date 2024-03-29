import axios from "axios";
import { ACTIONS, API } from "../../helpers/const";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext);
};
const INIT_STATE = {
  products: [],
  productDetails: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};
const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [count, setCount] = useState(1);

  const getProducts = async () => {
    const { data } = await axios(`${API}/?page=${page}`);
    setCount(Math.ceil(data.count / 8));
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };
  // console.log(getProducts());
  const getProductDetails = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${token.access}`;
    const { data } = await axios(`${API}/${id}/`, {
      headers: { Authorization },
    });
    console.log(data);
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

  const fetchByParams = async (value) => {
    //фильтрация
    if (value === "all") {
      getProducts();
    } else if (
      value === "wardrobes" ||
      value === "bedroom-sets" ||
      value === "kitchens" ||
      value === "tv-stand" ||
      value === "dressers" ||
      value === "living-room-sets" ||
      value === "children-sets" ||
      value === "cushioned-furniture"
    ) {
      const { data } = await axios(
        `${API}/?type=${value}&name=&description=&price_from=&price_to=`
      );
      console.log(value);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    }
  };

  const searchFilter = async (value) => {
    // search
    const { data } = await axios(`${API}/?name=${value}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  const like = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const count = await axios(`${API}/${id}/toggle_like/`, {
        headers: { Authorization: `Bearer ${token.access}` },
      });
      console.log(count, "likes");
      await getProductDetails(id);
    } catch (error) {
      console.log(error);
    }
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
      }}
    >
      {children}
    </productContext.Provider>
  );
};
export default ProductContextProvider;

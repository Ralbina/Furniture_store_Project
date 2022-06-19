import React, { createContext, useReducer } from "react";
import { getCountProductsFavorite } from "../../helpers/favoriteFunctions";

export const favoriteContext = createContext();

const INIT_STATE = {
  favorite: {},
  favoriteLength: getCountProductsFavorite(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FAVORITE":
      return { ...state, favorite: action.payload };
    case "CHANGE_FAVORITE_COUNT":
      return { ...state, favoriteLength: action.payload };
    default:
      return state;
  }
};

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductToFavorite = (productItem) => {
    //добавление
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        favoriteProducts: [],
      };
    }

    let newProduct = {
      item: productItem,
      count: 1,
    };

    let filterFavorite = favorite.favoriteProducts.filter((elem) => {
      return elem.item.id === productItem.id;
    });

    if (filterFavorite.length > 0) {
      favorite.favoriteProducts = favorite.favoriteProducts.filter((elem) => {
        return elem.item.id !== productItem.id;
      });
    } else {
      favorite.favoriteProducts.push(newProduct);
    }

    localStorage.setItem("favorite", JSON.stringify(favorite));

    dispatch({
      type: "CHANGE_FAVORITE_COUNT",
      payload: favorite.favoriteProducts.length,
    });
  };

  const getFavorite = () => {
    // отображение
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        favoriteProducts: [],
      };
    }

    dispatch({
      type: "GET_FAVORITE",
      payload: favorite,
    });
  };

  const deleteFavoriteProduct = (id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.favoriteProducts = favorite.favoriteProducts.filter(
      (elem) => elem.item.id !== id
    );
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
    dispatch({
      type: "CHANGE_FAVORITE_COUNT",
      payload: favorite.favoriteProducts.length,
    });
  };

  function changeFavoriteCount(id, count) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.favoriteProducts = favorite.favoriteProducts.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
      }
      return elem;
    });
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  return (
    <favoriteContext.Provider
      value={{
        favorite: state.favorite,
        favoriteLenght: state.favoriteLength,
        addProductToFavorite,
        getFavorite,
        deleteFavoriteProduct,
        changeFavoriteCount,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import React, { useContext, useEffect } from "react";
import { favoriteContext } from "../Context/FavoriteContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../Context/CartContext";
import hert from "../../assets/image/favotireHert.gif";
import "./Favorite.css";
import { NavLink } from "react-router-dom";
const Favorite = () => {
  const { favorite, getFavorite, deleteFavoriteProduct } =
    useContext(favoriteContext);
  const { addProductToCart } = useContext(cartContext);
  console.log("rendered");

  console.log(favorite, "favorite");
  useEffect(() => {
    console.log("useffect");
    getFavorite();
  }, []);

  return (
    <div className="favorite">
      {Array.isArray(favorite.favoriteProducts) &&
      favorite.favoriteProducts.length ? (
        <div className="favorite1">
          {favorite.favoriteProducts.map((elem) => (
            <Card key={elem.item.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="194"
                image={elem.item.image}
                alt={elem.item.name}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {elem.item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elem.item.price}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  className="btn"
                  onClick={() => addProductToCart(elem.item)}
                >
                  <AddShoppingCartIcon />
                </Button>
                <Button
                  className="btn"
                  onClick={() => deleteFavoriteProduct(elem.item.id)}
                  variant="contained"
                >
                  Удалить
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      ) : (
        <div className="hertFavorite">
          <div>
            <p className="textFavorite">
              Click on the heart to add the product to your favorites
            </p>
            <NavLink to="/list">
              <button className="buttonWrap">Go To Shop</button>
            </NavLink>
          </div>
          <div>
            <img src={hert} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Favorite;

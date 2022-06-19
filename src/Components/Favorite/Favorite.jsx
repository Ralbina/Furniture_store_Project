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
import Input from "@mui/material/Input";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Favorite.css";
import { cartContext } from "../Context/CartContext";
import { favoriteContext } from "../Context/FavoriteContext";
const Favorite = () => {
  const { favorite, getFavorite, deleteFavoriteProduct } =
    useContext(favoriteContext);
  const { addProductToCart } = useContext(cartContext);
  useEffect(() => {
    getFavorite();
  }, []);
  return (
    <div className="favorite">
      {favorite.favoriteProducts ? (
        <div className="favorite1">
          {favorite.favoriteProducts.map((elem) => (
            <Card key={elem.item.id} sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image={elem.item.img1}
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
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default Favorite;

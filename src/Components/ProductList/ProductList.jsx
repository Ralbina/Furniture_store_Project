import {
  Box,
  Pagination,
  Grid,
  Navlink,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardContent,
  Paper,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import { favoriteContext } from "../Context/FavoriteContext";
import SearchIcon from "@mui/icons-material/Search";
import LiveSearch from "../LiveSearch/LiveSearch";
import "./ProductList.css";
const ProductList = () => {
  const {
    products,
    getProducts,
    page,
    setPage,
    count,
    fetchByParams,
    searchFilter,
  } = useProducts();

  const { addProductToCart } = useContext(cartContext);
  const { addProductToFavorite } = useContext(favoriteContext);
  const navigate = useNavigate();
  console.log(products.results);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
  }, [page, searchParams]);
  const handleChange = (e, p) => {
    setPage(p);
  };
  console.log(products.results, "results in list");
  return (
    <>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            my: "35px",
            justifyContent: "space-evenly",
          }}
        >
          {products.results ? (
            products.results.map((item) => {
              return (
                <div className="textCard">
                  <Card
                    sx={{ maxWidth: 320, maxHeight: 500 }}
                    onClick={() => navigate(`/details/${item.id}`)}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="280"
                        image={item.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        className="btn"
                        onClick={() => addProductToFavorite(item)}
                        color="inherit"
                      >
                        <FavoriteIcon />
                      </Button>
                      <Button
                        className="btn"
                        onClick={() => addProductToCart(item)}
                        color="inherit"
                      >
                        <ShoppingCartIcon />
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box display="flex" justifyContent="center" my={3}>
            <Pagination count={count} page={page} onChange={handleChange} />
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default ProductList;

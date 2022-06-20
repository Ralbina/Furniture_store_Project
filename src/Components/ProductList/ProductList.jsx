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
    setSearchParams({
      search: search,
    });
  }, [search]);

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
      <LiveSearch />
      {/* <Grid item md={2}>
        <Paper
          elevation={5}
          sx={{ p: 2, bgcolor: "#f5f5f5", marginRight: "30px" }}
        >
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="Search..."
            value={search}
            onChange={(e) => searchFilter(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Paper>
      </Grid> */}
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
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
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
                    >
                      <FavoriteIcon />
                    </Button>
                    <Button
                      className="btn"
                      onClick={() => addProductToCart(item)}
                    >
                      <ShoppingCartIcon />
                    </Button>
                    <Button
                      onClick={() => navigate(`/details/${item.id}`)}
                      size="small"
                      color="primary"
                    >
                      Подробнее
                    </Button>
                  </CardActions>
                </Card>
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
          <Box my={3}>
            <Pagination count={count} page={page} onChange={handleChange} />
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default ProductList;

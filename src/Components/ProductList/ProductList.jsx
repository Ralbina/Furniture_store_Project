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
} from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { cartContext } from "../Context/CartContext";
import { favoriteContext } from "../Context/FavoriteContext";

const ProductList = () => {
  const { products, getProducts, page, setPage, count } = useProducts();
  const [searchParams] = useSearchParams();
  const { addProductToCart } = useContext(cartContext);
  const { addProductToFavorite } = useContext(favoriteContext);
  const navigate = useNavigate();
  console.log(products.results);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [page, searchParams]);

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
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
                  <CardMedia component="img" height="300" image={item.image} />
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
                  {/* //! !!!!!!!!!!!!!!!! измен в "подроб" и доб addProductToCart */}
                  <Button
                    onClick={() => {
                      addProductToCart(item);
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
                    onClick={() => addProductToFavorite(item)}
                    aria-label="add to favorites"
                  >
                    <FavoriteIcon />
                  </Button>

                  <Button
                    onClick={() => {
                      navigate(`/details/${item.id}`);
                    }}
                    size="small"
                    color="primary"
                  >
                    Подробнее
                  </Button>
                  {/* <NavLink to={`/details/${item.id}`}>
                    <Button size="small" color="primary">
                      Подробнее
                    </Button>
                  </NavLink> */}
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
  );
};

export default ProductList;

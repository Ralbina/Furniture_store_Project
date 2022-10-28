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
import { productContext, useProducts } from "../Context/ProductContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import { favoriteContext } from "../Context/FavoriteContext";
import SearchIcon from "@mui/icons-material/Search";
import SideBarSearch from "../sideBar/SideBarSearch";
import SideBarFilter from "../sideBar/SideBarFilter";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "./ProductList.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ProductList = () => {
  const { products, getProducts, page, setPage, count, searchFilter } =
    useProducts();

  const { addProductToCart } = useContext(cartContext);
  const { addProductToFavorite } = useContext(favoriteContext);
  const { fetchByParams } = useContext(productContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get("type") || "all");
  const paramsWithType = () => {
    fetchByParams();
    return {
      type: type,
      search: searchParams.get("search"),
    };
  };

  const paramsNoType = () => {
    fetchByParams();
    return {
      search: searchParams.get("search") || "",
    };
  };
  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);
  useEffect(() => {
    fetchByParams();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);
  useEffect(() => {
    getProducts();
  }, [page, searchParams]);
  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <>
<<<<<<< HEAD
      <div>{/* <SideBarSearch /> */}</div>
      <Grid item md={2}>
        <TextField
          type="text"
          placeholder="Поиск..."
          onChange={(e) => searchFilter(e.target.value)}
        />
        <SideBarFilter type={type} setType={setType} />
      </Grid>
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
                  <Card sx={{ maxWidth: 320, maxHeight: 500 }}>
                    <CardActionArea
                      onClick={() => navigate(`/details/${item.id}`)}
                    >
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
=======
      <div className="contList">
        <div className="serchList">
          <Grid>
            <TextField
              type="text"
              placeholder="поиск..."
              onChange={(e) => searchFilter(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <SideBarFilter type={type} setType={setType} />
          </Grid>
        </div>
        <div className="filterList">
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
                      <Card sx={{ maxWidth: 320, maxHeight: 500 }}>
                        <CardActionArea
                          onClick={() => navigate(`/details/${item.id}`)}
                        >
                          <CardMedia
                            component="img"
                            height="280"
                            image={item.image}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
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
        </div>
      </div>
>>>>>>> 67436538c774e61af0c08ef0469001746b4d4052
    </>
  );
};
export default ProductList;

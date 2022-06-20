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
import React from "react";
import { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";

const ProductList = () => {
  const { products, getProducts, page, setPage, count } = useProducts();
  const [searchParams] = useSearchParams();
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

  console.log(products.results, "results in list");

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
                  <NavLink to={`/details/${item.id}`}>
                    <Button size="small" color="primary">
                      Подробнее
                    </Button>
                  </NavLink>
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

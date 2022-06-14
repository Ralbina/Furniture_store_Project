import { Zoom } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductDetails = ({ item }) => {
  const { id } = useParams();

  const { getProductDetails, productDetails, like } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  console.log(item);

  return (
    <Zoom>
      <Paper sx={{ m: 6 }} elevation={24}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={5}>
            <img
              src={productDetails.image}
              alt=""
              style={{ maxWidth: "70%", margin: "20px 50px" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "50px",
              }}
            >
              <Typography variant="h5">{productDetails.manufacture}</Typography>
              <Typography variant="h6">{productDetails.price}</Typography>

              <IconButton onClick={() => like(id)}>
                <FavoriteBorderIcon />
                <Typography>{productDetails.likes}</Typography>
              </IconButton>
            </Box>
          </Grid>
          <Grid
            sx={{ margin: "50px" }}
            item
            xs={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography marginBottom="20px" variant="h4">
              {productDetails.name}
            </Typography>
            <Paper
              elevation={24}
              sx={{
                border: "1px solid",
                borderRadius: "10px",
                padding: "30px",
                background: "#ececec",
              }}
            >
              <Typography variant="h5">{productDetails.type}</Typography>
              <Typography variant="h6">{productDetails.description}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Zoom>
  );
};

export default ProductDetails;

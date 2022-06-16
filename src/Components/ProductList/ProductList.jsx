import { Box, Pagination, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
              <Box key={item.id} sx={{ margin: "15px" }}>
                <div>
                  <div
                    className="card1 text-center m-4"
                    style={{ width: "18rem", height: "250px" }}
                  >
                    <div class="hover-effect-btn">
                      <img
                        src={item.img}
                        height="220"
                        width="290"
                        className="card-img-top"
                        alt={item.title}
                      />
                      <h6 className="title2">{item.type}</h6>
                      <h5 className="title">{item.title} </h5>

                      <div class="overlay"></div>
                      <div class="button"></div>
                    </div>
                  </div>
                </div>
              </Box>
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

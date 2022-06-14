import { Box, Button, Input, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useProducts } from "../Context/ProductContext";

const AddProduct = () => {
  const { addProduct } = useProducts();

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    type: "",
    manufacture: "",
    description: "",
    image: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  const handleInpFile = (e) => {
    let file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "40vw",
          p: "6vh 1vw",
          ml: "1vw",
          my: "8vh",
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "black",
          // borderRadius: "10%",
        }}
      >
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          id="outlined-basic"
          label="Наименование"
          variant="outlined"
          name="name"
          size="small"
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          id="outlined-basic"
          label="Товарная позиция"
          variant="outlined"
          name="type"
          size="small"
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          id="outlined-basic"
          label="Цена"
          variant="outlined"
          name="price"
          size="small"
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          id="outlined-basic"
          label="Производство(страна)"
          variant="outlined"
          name="manufacture"
          size="small"
          onChange={handleInp}
        />

        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          id="outlined-basic"
          label="Описание"
          variant="outlined"
          name="description"
          size="small"
          onChange={handleInp}
        />

        <Input type="file" onChange={handleInpFile} />
        <Button
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            color: "black",
            backgroundColor: "whitesmoke",
          }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => {
            addProduct(product);
            navigate("/add");
          }}
        >
          Добавить продукт
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;

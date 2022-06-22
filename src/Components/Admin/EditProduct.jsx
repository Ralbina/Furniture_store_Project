import { Box, Button, Input, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import "../Admin/EditProduct.css";
import Select from "react-select";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);
  useEffect(() => {
    getProductDetails(id);
  }, []);
  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };
  const handleInpFile = (e) => {
    let file = e.target.files[0];
    setProduct({ ...product, image: file });
  };
  const options = [
    { value: "wardrobes", label: "ШКАФ" },
    { value: "bedroom-sets", label: "СПАЛЬНИ" },
    { value: "hallways", label: "ПРИХОЖИЕ" },
    { value: "kitchens", label: "КУХНИ" },
    { value: "tv-stand", label: "TV ТУМБЫ" },
    { value: "dressers", label: "КОМОДЫ" },
    { value: "living-room-sets", label: "ГОСТИНЫЕ" },
    { value: "children-sets", label: "ДЕТСКИЕ & ОФИС" },
    { value: "cushioned-furniture", label: "МЯГКАЯ МЕБЕЛЬ" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="editPage">
      <Box
        sx={{
          width: "40vw",
          p: "6vh 1vw",
          ml: "3vw",
          my: "8vh",
          mt: "vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          sx={{
            marginBottom: "20px",
            marginTop: "20px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          size="small"
          value={product.name || ""}
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "20px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="Ranks"
          variant="outlined"
          name="ranks"
          size="small"
          value={product.price || ""}
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "20px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          size="small"
          value={product.manufacture || ""}
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "20px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          size="small"
          value={product.description || ""}
          onChange={handleInp}
        />
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          label="Тип товара"
        />
        <Input type="file" onChange={handleInpFile} />
        <Button
          sx={{
            marginTop: "20px",
            borderColor: "black",
            color: "black",
            backgroundColor: "whitesmoke",
          }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => {
            saveEditedProduct(product);
            navigate(-1);
          }}
        >
          Edit product
        </Button>
      </Box>
    </div>
  );
};
export default EditProduct;

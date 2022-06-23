import { Box, Button, Input, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import "../Admin/AddProduct.css";
import Select from "react-select";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    type: "",
    manufacture: "",
    description: "",
    image: "",
  });

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
      className="aadBox"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "40vw",
          p: "6vh 1vw",
          ml: "34vw",
          my: "8vh",
          mt: "10vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          className="inp1"
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          s
          id="outlined-basic"
          label="Наименование"
          variant="outlined"
          name="name"
          size="small"
          onChange={handleInp}
        />

        <TextField
          className="inp3"
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
          className="inp4"
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
          className="inp5"
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
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          label="Тип товара"
        />
        <Input className="inpPhoto" type="file" onChange={handleInpFile} />
        <Button
          className="btnList"
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
            navigate("/list");
          }}
        >
          Добавить продукт
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;

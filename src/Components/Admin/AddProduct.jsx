import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../Context/ProductContext";

const AddProduct = () => {
  const { addProduct, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  const [inpValues, setInpValues] = useState({
    title: "",
    type: "",
    description: "",
    price: "",
  });
  console.log(inpValues);
  function handleInpValues(e) {
    let newObj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(newObj);
  }
  const handleClick = () => {
    if (
      inpValues.title.trim() === "" ||
      inpValues.type.trim() === "" ||
      inpValues.description.trim() === "" ||
      inpValues.price.trim() === ""
      // img1.trim() === "" ||
      // img2.trim() === "" ||
      // img3.trim() === ""
    ) {
      alert("fill");
    } else {
      addProduct(inpValues);
    }
  };
  return (
    <div>
      <div>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="title"
          onChange={(e) => handleInpValues(e)}
        />
        <TextField
          id="outlined-basic"
          label="Type"
          variant="outlined"
          name="type"
          onChange={(e) => handleInpValues(e)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          onChange={(e) => handleInpValues(e)}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          name="price"
          onChange={(e) => handleInpValues(e)}
        />
        <Button variant="contained" onClick={handleClick}>
          Add product
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;

// import { Box, Button, Input, TextField } from "@mui/material";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useProducts } from "../Context/ProductContext";
// import "../Admin/AddProduct.css";

// const AddProduct = () => {
//   const { addProduct } = useProducts();

//   const navigate = useNavigate();

//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     type: "",
//     manufacture: "",
//     description: "",
//     image: "",
//   });

//   const handleInp = (e) => {
//     if (e.target.name === "price") {
//       let obj = {
//         ...product,
//         [e.target.name]: Number(e.target.value),
//       };
//       setProduct(obj);
//     } else {
//       let obj = {
//         ...product,
//         [e.target.name]: e.target.value,
//       };
//       setProduct(obj);
//     }
//   };

//   const handleInpFile = (e) => {
//     let file = e.target.files[0];
//     setProduct({ ...product, image: file });
//   };

//   return (
//     <Box
//       className="aadBox"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Box
//         sx={{
//           width: "40vw",
//           p: "6vh 1vw",
//           ml: "34vw",
//           my: "8vh",
//           mt: "10vh",
//           display: "flex",
//           flexDirection: "column",
//           // backgroundColor: "black",
//           // borderRadius: "10%",
//         }}
//       >
//         <TextField
//           className="inp1"
//           sx={{
//             marginBottom: "10px",
//             borderColor: "black",
//             backgroundColor: "whitesmoke",
//           }}
//           id="outlined-basic"
//           label="Наименование"
//           variant="outlined"
//           name="name"
//           size="small"
//           onChange={handleInp}
//         />
//         <TextField
//           className="inp2"
//           sx={{
//             marginBottom: "10px",
//             borderColor: "black",
//             backgroundColor: "whitesmoke",
//           }}
//           id="outlined-basic"
//           label="Товарная позиция"
//           variant="outlined"
//           name="type"
//           size="small"
//           onChange={handleInp}
//         />
//         <TextField
//           className="inp3"
//           sx={{
//             marginBottom: "10px",
//             borderColor: "black",
//             backgroundColor: "whitesmoke",
//           }}
//           id="outlined-basic"
//           label="Цена"
//           variant="outlined"
//           name="price"
//           size="small"
//           onChange={handleInp}
//         />
//         <TextField
//           className="inp4"
//           sx={{
//             marginBottom: "10px",
//             borderColor: "black",
//             backgroundColor: "whitesmoke",
//           }}
//           id="outlined-basic"
//           label="Производство(страна)"
//           variant="outlined"
//           name="manufacture"
//           size="small"
//           onChange={handleInp}
//         />

//         <TextField
//           className="inp5"
//           sx={{
//             marginBottom: "10px",
//             borderColor: "black",
//             backgroundColor: "whitesmoke",
//           }}
//           id="outlined-basic"
//           label="Описание"
//           variant="outlined"
//           name="description"
//           size="small"
//           onChange={handleInp}
//         />

//         <Input className="inpPhoto" type="file" onChange={handleInpFile} />
//         <Button
//           className="btnList"
//           sx={{
//             marginBottom: "10px",
//             borderColor: "black",
//             color: "black",
//             backgroundColor: "whitesmoke",
//           }}
//           variant="outlined"
//           fullWidth
//           size="large"
//           onClick={() => {
//             addProduct(product);
//             navigate("/list");
//           }}
//         >
//           Добавить продукт
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default AddProduct;

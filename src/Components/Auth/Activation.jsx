// import {
//   Button,
//   FormControl,
//   FormHelperText,
//   Input,
//   InputLabel,
//   Paper,
//   Typography,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContextProvider";

// const Activation = () => {
//   const { activation } = useAuth();
//   const [code, setCode] = useState();

//   const handleInp = (e) => {
//     const code = e.target.value;
//     setCode(code);
//   };

//   return (
//     <Box sx={{ m: "15vh auto" }}>
//       <Paper elevation={2} sx={{ p: "100px 30vw", alignSelf: "center" }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "space-around",
//           }}
//         >
//           <Typography variant="h5" mb={3}>
//             Введите активационный код
//           </Typography>
//           <Typography variant="body1" mb={2}>
//             Вам на почту был отправлен активационный код. Проверьте почту, и
//             введите код для подтверждения регистрации
//           </Typography>
//           <FormControl>
//             <Box>
//               <InputLabel htmlFor="my-input">
//                 Activation code / Активационный код
//               </InputLabel>
//               <Input onChange={handleInp} aria-describedby="my-helper-text" />
//               <FormHelperText sx={{ mt: "10px" }} id="my-helper-text">
//                 Никому не сообщайте свой активационный код
//               </FormHelperText>
//               <Button variant="outlined" onClick={() => activation(code)}>
//                 Подтвердить
//               </Button>
//             </Box>
//           </FormControl>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default Activation;

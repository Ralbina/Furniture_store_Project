// import React, { useEffect, useState } from "react";
// import { styled, alpha } from "@mui/material/styles";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";
// import { useLocation, useSearchParams } from "react-router-dom";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// const LiveSearch = () => {
//   const [searchValue, setSearchValue] = useState("");

//   const [searchParams, setSearchParams] = useSearchParams();

//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/list") {
//       setSearchParams({
//         search: searchValue,
//       });
//     }
//   }, [searchValue]);

//   return (
//     <>
//       <TextField
//         fullWidth
//         id="input-with-icon-textfield"
//         label="Search..."
//         //   value={search}
//         onChange={(e) => searchFilter(e.target.value)}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//         }}
//         variant="standard"
//       />

//       <Search>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder="Search…"
//           inputProps={{ "aria-label": "search" }}
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//         />
//       </Search>
//     </>
//   );
// };

// export default LiveSearch;
import React, { useEffect, useState } from "react";
import { Divider, Grid, InputAdornment, Paper, TextField } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useSearchParams } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/system";
import { useProducts } from "../Context/ProductContext";

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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const LiveSearch = () => {
  const { fetchByParams, searchFilter } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  // useEffect(() => {
  //   setSearchParams({
  //     search: search,
  //   })

  // }, [ search]);

  return (
    <Grid item md={2}>
      <Paper
        elevation={5}
        sx={{ p: 2, bgcolor: "#f5f5f5", marginRight: "30px" }}
      >
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          //   value={search}
          onChange={(e) => searchFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        {/* <Grid sx={{ mt: "10px" }}>
          <Box sx={{ display: "flex" }}>
           
          </Box>
        </Grid> */}
      </Paper>
    </Grid>
  );
};

export default LiveSearch;

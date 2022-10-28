import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../../assets/image/logo.png";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { favoriteContext } from "../Context/FavoriteContext";
import { cartContext } from "../Context/CartContext";
import { productContext } from "../Context/ProductContext";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CottageIcon from "@mui/icons-material/Cottage";
import LightIcon from "@mui/icons-material/Light";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import InfoIcon from "@mui/icons-material/Info";
import "./Navbar.css";
export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { favoriteLenght } = React.useContext(favoriteContext);
  const { cartLenght } = React.useContext(cartContext);
  const { searchFilter } = React.useContext(productContext);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/login");
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{user}</MenuItem>
      {!user ? (
        <>
          <MenuItem onClick={handleMenuClose}>LOGIN</MenuItem>
        </>
      ) : (
        <MenuItem onClick={logout}>Logout</MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          color="success"
          aria-label="add to favorites"
          onClick={() => {
            navigate("/");
          }}
        >
          <CottageIcon />
          <Badge color="secondary"></Badge>
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="success"
          aria-label="add to favorites"
          onClick={() => {
            navigate("/list");
          }}
        >
          <ShoppingCartCheckoutIcon />
          <Badge color="secondary"></Badge>
        </IconButton>
        <p>Shop</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="success"
          aria-label="add to favorites"
          onClick={() => {
            navigate("/light");
          }}
        >
          <LightIcon />
          <Badge color="success"></Badge>
        </IconButton>
        <p>Modern Lighting</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="success"
          aria-label="add to favorites"
          onClick={() => {
            navigate("/furniture");
          }}
        >
          <EventSeatIcon />
          <Badge color="secondary"></Badge>
        </IconButton>
        <p>Modern Furniture</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="success"
          aria-label="add to favorites"
          onClick={() => {
            navigate("/aboutus");
          }}
        >
          <InfoIcon />
          <Badge color="secondary"></Badge>
        </IconButton>
        <p>About Us</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="success"
          aria-label="add to favorites"
          onClick={() => {
            navigate("/favorite");
          }}
        >
          <Badge badgeContent={favoriteLenght} color="success">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Favorite</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="success"
        >
          <Badge
            badgeContent={cartLenght}
            color="success"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="success"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ color: "white", bgcolor: "#154444" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavLink className="nav-link" to="/">
              <p variant="contained">Home</p>
            </NavLink>
            <NavLink className="nav-link" to="/list">
              <p variant="contained">Shop</p>
            </NavLink>
            <NavLink className="nav-link" to="/light">
              <p variant="contained">Modern Lighting</p>
            </NavLink>
            <NavLink className="nav-link" to="/furniture">
              <p variant="contained">Modern Furniture</p>
            </NavLink>
            {user === "admin@admin.com" ? (
              <NavLink className="nav-link" to="/add">
                <p variant="contained">Add Produts</p>
              </NavLink>
            ) : null}
            <NavLink className="nav-link" to="/aboutus">
              <p variant="contained">About Us</p>
            </NavLink>
            <IconButton
              size="large"
              color="inherit"
              aria-label="add to favorites"
              onClick={() => {
                navigate("/favorite");
              }}
            >
              <Badge badgeContent={favoriteLenght} color="success">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <Badge badgeContent={cartLenght} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

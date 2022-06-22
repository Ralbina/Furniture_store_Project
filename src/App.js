import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./Components/Context/AuthContext";
import ProductContextProvider from "./Components/Context/ProductContext";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import CartContextProvider from "./Components/Context/CartContext";
import FavoriteContextProvider from "./Components/Context/FavoriteContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <FavoriteContextProvider>
            <ProductContextProvider>
              <Navbar />
              <MainRoutes />
              <Footer />
              <ToastContainer />
            </ProductContextProvider>
          </FavoriteContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

//test

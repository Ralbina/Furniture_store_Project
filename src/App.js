import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./Components/Context/AuthContext";
import ProductContextProvider from "./Components/Context/ProductContext";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <ToastContainer />
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

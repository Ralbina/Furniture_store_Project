import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ProductContextProvider from "./Components/Context/ProductContext";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </ProductContextProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ProductContextProvider from "./Components/Context/ProductContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <MainRoutes />
      </ProductContextProvider>
    </BrowserRouter>
  );
}

export default App;

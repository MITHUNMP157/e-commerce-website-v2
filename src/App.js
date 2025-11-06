import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import ProductDetails from "./components/data/ProductDetails";
import useCart from "./hooks/useCart";

function App() {
  const { cartItems, cartAdd, cartRemove } = useCart();

  return (
    <div className="App">
      <BrowserRouter>
        <Header itemCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product"
            element={
              <Product productDetails={ProductDetails} onAddToCart={cartAdd} />
            }
          />
          <Route
            path="/cart"
            element={<Cart items={cartItems} onRemove={cartRemove} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

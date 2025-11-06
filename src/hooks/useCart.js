import { useState, useEffect } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartAdd = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  const cartRemove = (id) => {
    setCartItems((prevProduct) => prevProduct.filter((item) => item.id !== id));
  };
  return {
    cartItems,
    cartAdd,
    cartRemove,
  };
};

export default useCart;

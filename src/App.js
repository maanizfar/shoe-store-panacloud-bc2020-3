import React, { useState, useEffect, useContext } from "react";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import Footer from "./components/Footer";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";

import GlobalContext from "./state/GlobalContext";

const dataURL = "https://shoe-store-api-bc2020.herokuapp.com/products/";

function App() {
  const [error, setError] = useState(null);
  const { recieveProducts, products } = useContext(GlobalContext);

  useEffect(() => {
    fetch(dataURL)
      .then((res) => res.json())
      .then((products) => recieveProducts(products))
      .catch((err) => {
        console.error("Error: ", err);
        setError(true);
      });
  }, [recieveProducts]);

  if (error) return <p>There was an error while fetching the data.</p>;

  return (
    <>
      <Navigation />

      {products.length > 0 ? (
        <Routes>
          <Route path="/" element={<div>Hello world</div>} />
          <Route path="/men" element={<ShopPage category="men" />} />
          <Route path="/women" element={<ShopPage category="women" />} />
          <Route path="/kids" element={<ShopPage category="kids" />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      ) : (
        <p>Fetching data...</p>
      )}

      <Footer />
    </>
  );
}

export default App;

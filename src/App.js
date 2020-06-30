import React from "react";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Hello world</div>} />
        <Route path="/men" element={<div>Men</div>} />
        <Route path="/women" element={<div>Women</div>} />
        <Route path="/kids" element={<div>Kids</div>} />
        <Route path="/cart" element={<div>Cart</div>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

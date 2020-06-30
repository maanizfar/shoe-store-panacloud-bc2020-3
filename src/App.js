import React from "react";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
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

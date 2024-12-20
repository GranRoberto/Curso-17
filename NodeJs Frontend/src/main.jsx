import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewProducts, CreateProduct, EditProduct } from "./pages/pages";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewProducts />} />
        <Route path="/creat-product" element={<CreateProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

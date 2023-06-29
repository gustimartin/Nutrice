import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Categories from "./components/categories/Categories";
import ProductCard from "./components/products/ProductCard";
import Products from "./components/products/Products";
import Form from "./components/register/Form";
function App() {
  return (
    <Routes id="root">
      <Route path="/" element={<Hero />} />
      <Route path="/About" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/login" element={<Form />} />
    </Routes>
  );
}

export default App;

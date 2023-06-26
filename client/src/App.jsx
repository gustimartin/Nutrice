import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Categories from "./components/categories/Categories";
import ProductCard from "./components/products/ProductCard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/About" element={<ProductCard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;

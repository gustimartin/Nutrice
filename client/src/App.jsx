import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import RegisterForm from "./components/register/RegisterForm";
import LoginForm from "./components/register/LoginForm";
function App() {
  return (
    <Routes id="root">
      <Route path="/" element={<Hero />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/About" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;

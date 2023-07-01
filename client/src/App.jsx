import { Route, Routes } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
// import RegisterForm from "./components/register/RegisterForm";
import LoginForm from "./components/register/LoginForm";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/Home";

function App() {
  return (
    <Routes id="root">
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoutes />}></Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/About" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;

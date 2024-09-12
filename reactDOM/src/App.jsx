import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Header from "./components/Header";
import Employee from "./pages/Employee";
import CompanyAbout from "./pages/CompanyAbout";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />}>
          <Route path="employee" element={<Employee />} />
          <Route path="companyAbout" element={<CompanyAbout />} />
        </Route>
        <Route path="/products-details/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

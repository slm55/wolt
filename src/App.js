import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import CategoryProducts from "./components/AllProducts/CategoryProducts";
import ProductDetails from "./components/AllProducts/ProductDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:category" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

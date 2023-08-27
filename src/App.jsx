import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Products from "./pages/Products/Products.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Product from "./pages/Product/Product.jsx";
import ProductsProvider from "./context/ProductsProvider.jsx";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;

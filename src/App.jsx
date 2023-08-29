import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Products from "./pages/Products/Products.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Product from "./pages/Product/Product.jsx";
import ProductsProvider from "./context/ProductsProvider.jsx";
import ProductsLayout from "./pages/ProductsLayout/ProductsLayout.jsx";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;

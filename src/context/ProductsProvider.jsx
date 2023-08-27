import ProductsContext from "./ProductsContext.jsx";
import products from "../data/data.js";

function ProductsProvider({ children }) {
  const value = {
    products: products,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;

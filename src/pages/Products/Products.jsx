import Layout from "../../layout/Layout.jsx";
import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: "product-1",
      title: "Product 1",
    },
    {
      id: "product-2",
      title: "Product 2",
    },
    {
      id: "product-3",
      title: "Product 3",
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-center">Products Page</h1>
      </div>
      <ul className="m-6">
        {products.map((product, index) => (
          <li key={index} className="flex items-center gap-4">
            <h2>{product.title}</h2>
            <Link to={`${product.id}`}>See Details</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Products;

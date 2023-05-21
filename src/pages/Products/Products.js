import Layout from "../../layout/Layout.js";
import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: crypto.randomUUID(),
      title: "Product 1",
    },
    {
      id: crypto.randomUUID(),
      title: "Product 2",
    },
    {
      id: crypto.randomUUID(),
      title: "Product 2",
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-center">Products Page</h1>
      </div>
      <ul className="m-6">
        {products.map((product, index) => (
          <li className="flex items-center gap-4">
            <h2>{product.title}</h2>
            <Link to={`/products/${product.id}`}>See Details</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Products;

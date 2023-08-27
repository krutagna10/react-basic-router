import Layout from "../../layout/Layout.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../../context/ProductsContext.jsx";

function Products() {
  const { products } = useContext(ProductsContext);

  return (
    <Layout>
      <h1 className="text-center">The Products Page</h1>
      <ul className="m-6">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>View Product Link</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={product.id}>View Product</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </Layout>
  );
}

export default Products;

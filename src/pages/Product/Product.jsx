import { Link, useParams } from "react-router-dom";
import Layout from "../../layout/Layout.jsx";
import { useContext } from "react";
import ProductsContext from "../../context/ProductsContext.jsx";

function Product() {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();

  const [product] = products.filter((product) => product.id === id);

  return (
    <Layout>
      <h1>The Product Page</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Go Back Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>
              <Link to="/">Go Back</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export default Product;

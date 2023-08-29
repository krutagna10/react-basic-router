import { Link, useOutletContext, useParams } from "react-router-dom";
import Layout from "../../layout/Layout.jsx";
import { useContext } from "react";
import ProductsContext from "../../context/ProductsContext.jsx";

function Product() {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  const { text } = useOutletContext();

  const [product] = products.filter((product) => product.id === id);

  return (
    <div>
      <h3>Product {text}</h3>
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
              <Link to=".." relative="path">
                Go Back
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Product;

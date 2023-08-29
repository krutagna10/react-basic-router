import { Link, useOutletContext } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../../context/ProductsContext.jsx";

function Products() {
  const { products } = useContext(ProductsContext);
  const { text } = useOutletContext();

  return (
    <div>
      <h3 className="text-center">Index {text}</h3>
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
    </div>
  );
}

export default Products;

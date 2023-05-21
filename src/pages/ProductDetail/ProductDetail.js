import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout.js";

function ProductDetail() {
  const params = useParams();

  return (
    <Layout>
      <div>
        <h1>Product Detail</h1>
        <p>{params.id}</p>
      </div>
    </Layout>
  );
}

export default ProductDetail;

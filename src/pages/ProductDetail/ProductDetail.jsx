import { Link, useParams } from "react-router-dom";
import Layout from "../../layout/Layout.jsx";

function ProductDetail() {
  const params = useParams();
  console.log(params);

  return (
    <Layout>
      <div>
        <h1>Product Detail</h1>
        <p>The parameter id is {params.id}</p>
        <Link to="../" relative="path">
          Go Back
        </Link>
      </div>
    </Layout>
  );
}

export default ProductDetail;

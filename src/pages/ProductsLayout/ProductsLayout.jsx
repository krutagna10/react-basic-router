import Layout from "../../layout/Layout.jsx";
import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <Layout>
      <h1>The Products Layout Page</h1>
      <Outlet context={{ text: "Page" }} />
    </Layout>
  );
}

export default ProductLayout;

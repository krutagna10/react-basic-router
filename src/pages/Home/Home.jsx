import Layout from "../../layout/Layout.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/products");
  }

  return (
    <Layout>
      <h1 className="text-center">The Home Page</h1>
      <button onClick={handleNavigate} className="m-auto btn btn--green">
        Go to Products
      </button>
    </Layout>
  );
}

export default Home;

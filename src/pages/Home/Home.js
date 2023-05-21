import Layout from "../../layout/Layout.js";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/about");
  }

  return (
    <Layout>
      <div>
        <h1 className="text-center">Home Page</h1>
        <button onClick={handleNavigate} className="m-4">
          Navigate to About
        </button>
      </div>
    </Layout>
  );
}

export default Home;

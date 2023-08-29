import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // Go Back One Step
      navigate(-1);
    }, 1000);
  }, []);

  return <h1 className="text-center">Page Not Found</h1>;
}

export default NotFound;

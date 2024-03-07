import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to="/products">Product Page</Link>
      </p>
      <button onClick={() => navigate("/")}>Navigate to Home</button>
    </>
  );
};

export default Home;

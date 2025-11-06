import React from "react";
import logo from "./home-images/image1.jpg";

const Home = () => {
  return (
    <div>
      <img src={logo} alt="logo" style={{ width: "100%", height: "200px" }} />
    </div>
  );
};

export default Home;

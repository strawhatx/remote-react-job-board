import React from "react";
import Hero from "./components/Hero";

const HomeView = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column bg-light text-dark"
        style={{ height: "89vh" }}>
        <Hero />
      </div>
    </>
  );
};

export default HomeView;

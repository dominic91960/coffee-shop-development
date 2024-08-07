import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Selection from "./components/Selection/Selection";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="pt-0">
        <Carousel />
        {/* <Hero /> */}
        {/* <Selection /> */}
        {/* <h1>selection</h1>
        <h1>offerings</h1>
        <h1>specialty</h1>
        <h1>about</h1>
        <h1>contact</h1> */}
      </main>
    </>
  );
};

export default App;

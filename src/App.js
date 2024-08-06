import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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

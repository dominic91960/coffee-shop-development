import { useState } from "react";

import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionFour from "./components/SectionFour/SectionFour";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

function App() {
  const [isTriggered, setIsTriggered] = useState(false);
  const handleClick = () => {
    setIsTriggered(true);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero isTriggered={isTriggered} handleClick={handleClick} />
      <Menu isTriggered={isTriggered} handleClick={handleClick} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}

export default App;

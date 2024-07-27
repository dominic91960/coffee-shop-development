import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;

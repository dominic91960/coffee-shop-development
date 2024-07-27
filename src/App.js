import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import SectionTwo from "./components/SectionTwo/SectionTwo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionTwo />
    </div>
  );
}

export default App;

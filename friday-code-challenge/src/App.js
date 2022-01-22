//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import SectionSelectCar from "./components/sections/SectionSelectCar";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionSelectCar />
      <Footer />
    </div>
  );
}

export default App;

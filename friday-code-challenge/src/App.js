//import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/structure/Layout.js";
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import SectionSelectCar from "./components/sections/SectionSelectCar";

function App() {
  return (
    <Layout>
      <Header />
      <SectionSelectCar />
      <Footer />
    </Layout>
  );
}

export default App;

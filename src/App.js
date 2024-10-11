import { Suspense } from "react";
import "./App.css";
import AboutService from "./Components/AboutService/AboutService";
import Brands from "./Components/Brands/Brands";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
        <Hero />
        <Brands />
        <Products />
        <AboutService />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;

import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import "./App.css";
import AboutService from "./Components/AboutService/AboutService";
import Brands from "./Components/Brands/Brands";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import News from "./Components/News/News";
import Login from "./Components/Auth/Login";
import Dealers from "./Components/Dealers/Dealers";
import Companies from "./Components/Companies/Companies";
import { getBranding } from "./domainConfig";

function App() {
  useEffect(() => {
    // Set the branding when the component mounts
    const branding = getBranding();

    // Optional: Update page title dynamically
    document.title = branding.title;

    // Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-C2EC5BDBC6`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-C2EC5BDBC6");
  }, []);
  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          {/* Define the routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <News />
                <Brands />
                <Dealers />
                <Products />
                <Companies />
                <AboutService />
                <Footer />
              </>
            }
          />
          {/* Route for authentication page */}
          <Route path="/admin" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

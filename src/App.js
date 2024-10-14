import { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Common/Navbar/Navbar";
import Footer from "./Common/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import LogisticService from "./Pages/LogisticServicePage/LogisticService";
import Contact from "./Pages/ContactPage/Contact";

function App() {
  const [host, setHost] = useState("arizg");

  useEffect(() => {
    if (window.location.hostname === "localhost") {
      setHost("kambros");
    }

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
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="about" exact element={<About/>}/>
          <Route path="procurement-logistics-services" exact element={<LogisticService/>}/>
          <Route path="contact-us" exact element={<Contact/>}/>
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;

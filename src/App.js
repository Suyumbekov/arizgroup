import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Common/Navbar/Navbar";
import Footer from "./Common/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import LogisticService from "./Pages/LogisticServicePage/LogisticService";
import Contact from "./Pages/ContactPage/Contact";

function App() {
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

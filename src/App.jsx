// Jai Shree Ram

import React, { useEffect } from "react";
import "../public/css/fonts.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notfound/NotFound";

function App() {


  // changing title of the page 

  useEffect(() => {
    const updateTitle = () => {
      const path = window.location.pathname;
      const pageName =
        path === "/"
          ? "Home"
          : path.slice(1).charAt(0).toUpperCase() + path.slice(2);

      switch (pageName) {
        case "Home":
          document.title = "Home | Designizy";
          break;
        case "About":
          document.title = "About | Designizy";
          break;
        case "Contact":
          document.title = "Contact | Designizy";
          break;
        default:
          document.title = "404 Not Found | Designizy";
      }
    };

    updateTitle();
    window.addEventListener("popstate", updateTitle);

    return () => window.removeEventListener("popstate", updateTitle);
  }, []);



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

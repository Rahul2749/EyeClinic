import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import BookingModal from "./components/BookingModal";
import Preloader from "./components/Preloader";

function App() {
  return (
    <Router>
      <div className="app bg-background text-on-background min-h-screen flex flex-col">
        <Preloader />
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <BookingModal />
      </div>
    </Router>
  );
}

export default App;

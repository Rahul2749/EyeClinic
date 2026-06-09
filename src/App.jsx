import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import BookingModal from "./components/BookingModal";
import Preloader from "./components/Preloader";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";

function App() {
  return (
    <Router>
      <SmoothScrollProvider>
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
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;

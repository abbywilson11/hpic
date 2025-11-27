import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./pages/HomePage/Home";
import ScrollToTop from "./ScrollToTop";


// Navbar buttons imported separately
import MyJournal from "./Navbar/buttons/MyJournal";
import Language from "./Navbar/buttons/Language";
import Login from "./Navbar/buttons/Login";

// New InfoSection pages (some connected to navbar buttons)
import TreatmentOptions from "./pages/InformationSection/TreatmentOptions/TreatmentOptions";
import Community from "./pages/InformationSection/Community/Community";
import Education from "./pages/InformationSection/Education/Education";
import EarlyDetection from "./pages/InformationSection/EarlyDetection/EarlyDetection";

//styling
import "./App.css";

function App() {
  return (
    <Router>
       <ScrollToTop /> {/* Ensures the page scrolls to top on route change */}
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes> {/* Main Routes to pages */}
            <Route path="/Home" element={<Home />} />
            <Route path="/EarlyDetection" element={<EarlyDetection />} />
            <Route path="/TreatmentOptions" element={<TreatmentOptions />} />
            <Route path="/myjournal" element={<MyJournal />} />
            <Route path="/ENFR" element={<Language />} />
            <Route path="/login" element={<Login />} />

            {/* Navbar button routes */}
            <Route path="/EarlyDetection" element={<EarlyDetection />} />
            <Route path="/TreatmentOptions" element={<TreatmentOptions />} />
            <Route path="/myjournal" element={<MyJournal />} />
            <Route path="/ENFR" element={<Language />} />
            <Route path="/login" element={<Login />} />

            {/* InfoSection card routes */}
            <Route path="/EarlyDetection" element={<EarlyDetection />} />
            <Route path="/TreatmentOptions" element={<TreatmentOptions />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Education" element={<Education />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

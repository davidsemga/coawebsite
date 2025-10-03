import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import OfficialList from "./OfficialList";
import Official from "./Official";
import { Link } from "react-router-dom";


function App() {
  return (
    <Router basename="/coawebsite">
      <div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/officials" element={<OfficialList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
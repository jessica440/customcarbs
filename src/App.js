import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomOrders from "./pages/CustomOrders";
import JacketCustomiser from "./pages/JacketCustomiser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomOrders />} />
        <Route path="/customise" element={<JacketCustomiser />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;

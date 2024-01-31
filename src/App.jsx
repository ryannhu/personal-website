import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/Home";
import DefaultPage from "./components/Brain";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoadingSpinner from "./components/loading";

function App() {
  useEffect(() => {
    document.title = "Ryan Hu";
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<DefaultPage />}></Route>
          <Route path="/test" element={<LoadingSpinner />}></Route>
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

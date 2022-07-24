import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Task2 from "./task2/Task2.jsx";

function App() {
  return (
    <Router>
      <Task2 />
    </Router>
  );
}

export default App;

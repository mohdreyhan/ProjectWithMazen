import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Body/HomePage/HomePage.js";
import Header from "./Components/Header/Header.js";
import Projects from "./Components/Body/Projects/Projects.js";
import Tasks from "./Components/Body/Tasks/Tasks.js";
import Employees from "./Components/Body/Employees/Employees.js";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

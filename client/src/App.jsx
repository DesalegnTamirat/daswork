import React from "react"
import { Route, Routes } from "react-router-dom";
import ApplyJob from "./pages/ApplyJob";
import Application from "./pages/Application";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
      </Routes>
    </div>
  )
}

export default App;
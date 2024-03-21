import React from "react";
import { RegisterPage } from "./container/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./container/Home";
import { NotFound } from "./container/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<RegisterPage isLoginPage={false}/>} />
        <Route path="/login" element={<RegisterPage isLoginPage={true}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

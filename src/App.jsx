import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//pages
import Login from "./components/pages/Login";
import CreateLogin from "./components/pages/CreateLogin";

function App(){
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/createlogin" element={<CreateLogin />} />
      </Routes>
    </Router>
  )
}

export default App;

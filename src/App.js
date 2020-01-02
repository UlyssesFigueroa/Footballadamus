import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
// import TableArea from "./components/TableArea";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Jumbotron />
      <SignUp />
      
    </div>
  );
}

export default App;

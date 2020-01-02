import React from "react";
import Navbar from "./components/Navbar";
// import SignUp from "./components/SignUp";
// import TableHeadings from "./components/TableHeadings";
// import TableData from "./components/TableData";
import PlayerQue from "./components/PlayerQue";
// import OpenGames from "./components/OpenGames";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <OpenGames/> */}
      <PlayerQue />
      {/* <TableHeadings/> */}
      {/* <TableData/> */}
      {/* <SignUp /> */}
      
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
// import Selection from "./components/Selection";
// import PlayerChoices from "./components/Playerchoices";
// import TableHeadings from "./components/TableHeadings";
// import TableData from "./components/TableData";
// import PlayerQue from "./components/PlayerQue";
// import OpenGames from "./components/OpenGames";

const choices = ["tackle", "fumble", "reception", "field goal"]

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <OpenGames/> */}
      {/* <PlayerQue /> */}
      {/* <PlayerChoices choices={choices}/> */}
      {/* <TableHeadings/> */}
      {/* <TableData/> */}
      <SignUp />
      
    </div>
  );
}

export default App;

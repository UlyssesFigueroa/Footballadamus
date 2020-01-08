import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {Text, View} from 'react-native';
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Selection from "./components/Selection";
import PlayerChoices from "./components/Playerchoices";
// import TableHeadings from "./components/TableHeadings";
// import TableData from "./components/TableData";
import Profile from "./components/Profile";
import PlayerQue from "./components/PlayerQue";
import OpenGames from "./components/OpenGames";
import Welcome from "./components/Welcome";

const choices = ["tackle", "fumble", "reception", "field goal"]

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/opengames" component={OpenGames}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/playerque" component={PlayerQue}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/selection" component={Selection}/>
      <PlayerChoices choices={choices}/>
      {/* <TableHeadings/> */}
      {/* <TableData/> */}
      </Switch>
      </div>
      </Router>
  );
}

export default App;

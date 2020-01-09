import React from "react";

const divStyle = {
  fontSize:'30px',
  textAlign:'center'
  
};


function PlayerQue() {
  return (
    <div classNameName="jumbotron">
      <h1 style ={divStyle}>Room 1</h1>
      <h2 style ={divStyle}>WAS vs PHI</h2>
      <hr></hr>
      <div className="buttons">
  <button className="button is-info is-small">Player-1</button>
  <button className="button is-success is-small">Player-2</button>
  <button className="button is-warning is-small">Player-3</button>
  <button className="button is-danger is-small">Player-4</button>
</div>

<div className="buttons">
<button className="button is-primary is-outlined">READY?</button>
</div>

<div className="control">
  <textarea className="textarea" placeholder="Normal textarea"></textarea>
</div>
      
    </div>
  );
}

export default PlayerQue;

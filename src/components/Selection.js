import React from "react";

const divStyle = {
    fontSize: '30px',
    textAlign: 'center'

};


const choices = ["tackle", "fumble", "reception", "field goal"]
// ReactDOM.render(
//     <PlayerChoices choices={choices}/>,
//     document.getElementById('listitem')
// );


function Selection() {
    return (
        <div className="container">

            <h1 style={divStyle}>Room 1</h1>
            <h2 style={divStyle}>WAS vs PHI</h2>

            <article class="message">
                <div class="message-header">
                    <p>Live Updates</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    "Case Keenum passed to Vernon Davis to the right for 48 yard touchdown"
  </div>
            </article>



            <div id="listitem"></div>

        </div>

    )
}

export default Selection;
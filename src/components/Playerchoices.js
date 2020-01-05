import React from "react";

function PlayerChoices(props) {
    const choices = props.choices;
    const listItems = choices.map((choice) =>
        <li>{choice}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}
export default PlayerChoices;
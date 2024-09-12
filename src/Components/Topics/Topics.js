import React from "react";
import Styles from "../../Styles/Topics.module.css";

function Topics({name, onClickHandler, selected, link}) {
    let className;
    
    // Changes the style of the selected button
    if (name === selected) {
        className = Styles.selectedButton;
    } else {
        className = Styles.normalButton;
    }
    return (
        <button name={name} value={name} onClick={onClickHandler} className={className}>
            <img src={link} alt='' className={Styles.emojis} />
            {name}
        </button>

    );
}

export default Topics;
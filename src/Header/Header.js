import React from 'react';
import "./Header.css";
import Weather from "./headerFunctions/Weather/Weather"
import Time from "./headerFunctions/Time/Time"
function Header() {

    return (
        <div className="headerContainer">
        <Weather />
        <p className="headerText">GOOD MORNING</p>
        <Time />
        </div>
    )
}

export default Header
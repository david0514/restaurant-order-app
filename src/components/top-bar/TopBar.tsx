import React from 'react';
import './TopBar.css';
import {useNavigate} from "react-router-dom";

function TopBar() {

    const isLoggedIn = false

    const navigate = useNavigate();

    return (
        <div className="top-bar-container">
            <div className="top-bar-left-part" onClick={() => navigate('/', {replace: true})}>
                <img className="restaurant-logo" src="/top-bar/restaurant-logo.svg" alt=""/>
                <span className="restaurant-name">Teszt étterem</span>
            </div>
            <div className="top-bar-center-part">

            </div>
            <div className="top-bar-right-part">
                {/*<button className="outline-button outline-button-light" style={{marginRight: "0.5rem"}}>Rendelés</button>*/}

                <img className="user-icon" src="/top-bar/user-icon.svg" alt=""/>

                {/*{isLoggedIn ?*/}
                {/*    <img className="logout-icon" src="/top-bar/logout-icon.svg" alt=""/> :*/}
                {/*    <img className="login-icon" src="/top-bar/login-icon.svg" alt=""/>*/}
                {/*}*/}
            </div>
        </div>
    );
}

export default TopBar;

import React from 'react';
import './Frame.css';
import Menu from "../menu/Menu";
import TopBar from "../top-bar/TopBar";
import {Outlet} from "react-router-dom";

function Frame() {
    return (
        <div className="frame-container">
            <TopBar></TopBar>
            <Menu></Menu>
            <div className="frame-content">
                <Outlet/>
            </div>
        </div>
    );
}

export default Frame;

import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './index.css';
import logo from "../../assets/v_logo.png";

export default class Sidemenu extends Component {
    render() {
        return (
            <div className="menu_box">
                <div className="menu_box__header">
                    <img src={logo}/>
                    <span>VibeHub<br/>Bots<br/>Dapp</span>
                </div>

                <div className="menu_box__desc">
                    VibeHub Bots Management Ethereum Dapp
                </div>

                <div className="menu_box__navs">
                    <Link to={`/dashboard`} className={this.props.pathname === '/dashboard' ? "menu_box__navs-button router-link-exact-active router-link-active" : "menu_box__navs-button"}>Deploy Bot</Link>
                    <Link to={`/bots`} className={this.props.pathname === '/bots' ? "menu_box__navs-button router-link-exact-active router-link-active" : "menu_box__navs-button"}>Bots List</Link>
                </div>
            </div>
        );
    }
}

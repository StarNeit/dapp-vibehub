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
                </div><br/>
                <div>
                    Admin's Main ETH wallet: <a href="https://ropsten.etherscan.io/address/0xE8E040bFB3ffb67Af7ecD125f9334e9b50a69D54" target="_blank"><b>0xE8E040bFB3ffb67Af7ecD125f9334e9b50a69D54</b></a>
                </div>

                <div className="menu_box__navs">
                    <Link to={`/dashboard`} className={this.props.pathname === '/dashboard' ? "menu_box__navs-button router-link-exact-active router-link-active" : "menu_box__navs-button"}>Deploy Bot</Link>
                    <Link to={`/bots`} className={this.props.pathname === '/bots' ? "menu_box__navs-button router-link-exact-active router-link-active" : "menu_box__navs-button"}>Bots List</Link>
                    <Link to={`/admin`} className={this.props.pathname === '/admin' ? "menu_box__navs-button router-link-exact-active router-link-active" : "menu_box__navs-button"}>Admin Page</Link>
                </div>
            </div>
        );
    }
}

import React from 'react';
import "./Header.css";
import Headroom from "react-headroom";
import { useState } from 'react';
function Header() {
    const [header, setHeader] = useState(false);
    var checkbox = document.getElementById("menu-btn");
    const backgroundChange = () => {
        if (window.scrollY >= 80) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };
    window.addEventListener("scroll", backgroundChange);
    return (
        <Headroom>
            <header className={header ? "header active" : "header"} id="header">
                <div className="header__logoContainer">
                    <img
                        src="/Images/logo.png"
                        height="70"
                        width="70"
                        alt=""
                        className="logo"
                    />
                </div>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li>
                        <a href="#home" >Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#talents">Talents</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </header>
        </Headroom>
    )
}
export default Header;
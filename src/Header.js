import React from 'react';
import "./Header.css";
import Headroom from "react-headroom";
function Header() {
    return (
        <Headroom>
            <header className = "header">
                <img 
                    className = "my-logo"
                    src = "https://firebasestorage.googleapis.com/v0/b/instagram-clone-9babf.appspot.com/o/images%2FYAY-removebg-preview.png?alt=media&token=ad63e9b1-1f40-48de-935f-e8eb93fce061"
                    alt = ""
                />
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label
                    className="menu-icon"
                    htmlFor="menu-btn"
                    style={{color: "white"}}
                    >
                    <span className="navicon"></span>
                </label>
                <ul className = "menu">
                    <li>
                        <a href="#home">Home</a>
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
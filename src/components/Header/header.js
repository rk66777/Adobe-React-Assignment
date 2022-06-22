import React from "react";
import './styles/header.scss';
import logo from './images/venia-logo.png';

// export default function Header() {

//     return (
//         <div className="header"></div>
//     )
// }

const Header = () => {

    return (
        <header className="container header-container">
            <div className="header">
                <nav className="navbar d-flex d-lg-none">
                    <i className="hamburger" id="hamburger" data-state="show"></i>
                    <a className="nav-title no-underline" href="/">VENIA</a>
                    <div className="align-right">
                        <div className="seacrh-icon"></div>
                        <div className="cart-icon"></div>
                    </div>
                </nav>
                <div className="d-none d-lg-flex">
                    <div className="header-logo">
                        <img src={logo} className="logo" alt="venia logo"/>
                    </div>
                    <ul className="menu">
                        <li className="menu-item"><a href="/" className="item">Women</a></li>
                        <li className="menu-item"><a href="/" className="item">Men</a></li>
                        <li className="menu-item"><a href="/" className="item">Smart Gear</a></li>
                        <li className="menu-item"><a href="/" className="item">Accessories</a></li>
                    </ul>
                    <div className="menu-right">
                        <div className="seacrh-icon"><p className="item-text">Search</p></div>
                        <div className="user-icon"><p className="item-text">Sign in</p></div>
                        <div className="cart-icon"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
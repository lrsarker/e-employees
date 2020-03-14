import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div>
            <img src={logo} alt=""/>
            <nav>
                <a href="home">Home</a>
                <a href="employees">Employees List</a>
                <a href="contact">Contact-Us</a>
                <a href="about">About-Us</a>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../../images/logo.png'
import  './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                
                <a href="/singers">Singers</a>
                <a href="/logout">Logout</a>
            </nav>
           
        </div>
    );
};

export default Header;
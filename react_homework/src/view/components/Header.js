import React from 'react';
// import '../../css/Header.css';
import logo from '../../img/logo.svg';
function Header() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </div>
    );
}
export default Header;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";

function Header () { 
    return (
        <nav className="header" >
            <div className="container">
                <Link className="logo" to="/">
                    <img src="https://static.thenounproject.com/png/2079682-200.png" alt="logo" />
                </Link>
                <h1>Penny</h1>
                <ul>
                    <li>
                        <NavLink
                            exact
                            to="add"
                            activeClassName="active"
                        >
                            deposit
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="thoughts"
                            activeClassName="active"
                        >
                            bank
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="wallet"
                            activeClassName="active"
                        >
                            wallet
                        </NavLink>
                    </li>
                </ul>


            </div>
        </nav>
    );
}

export default Header;
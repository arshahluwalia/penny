import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
import DepositThought from '../DepositThought/DepositThought';
import logo from '../logo.svg';

class Header extends React.Component { 
    
  state = {
    deposit: false
  }

  toggleDeposit = () => {
    this.setState({deposit: !this.state.deposit});
  }

    render() {
        return (
            <nav className="header" >
                <div className="container">
                    <Link className="logo" to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <h1></h1>
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to=""
                                activeClassName="active"
                            >
                                home
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
                                to="profile"
                                activeClassName="active"
                            >
                                profile
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

                    <div className="btn">
                        <button className="deposit" onClick={this.toggleDeposit}>Deposit</button>
                        {this.state.deposit ? <DepositThought toggle={this.toggleDeposit} /> : null}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
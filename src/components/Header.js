import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="headerMainDiv">
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Bank Application</a>
                    </div>
                    <div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/add_account'>Add Account</Link></li>
                                <li><Link to='/show_account'>Show Account</Link></li>
                                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Transactions<span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><Link to='/all_deposits'>Show All Deposits</Link></li>
                                        <li><Link to='/all_withDraws'>Show All WithDraws</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};
export default Header;
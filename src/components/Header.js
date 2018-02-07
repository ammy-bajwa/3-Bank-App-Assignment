import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className='head-title'>
                <h1>Bank Application</h1>
                <h3>Created By Amir Ali</h3>
            </div>
            <div className="head-btn">
                <div className=" container-fluid">
                    <button className='btn nav-btn'><Link to='/'>Home</Link></button>
                    <button className='btn nav-btn'><Link to='/add_account'>Add Account</Link></button>
                    <button className='btn nav-btn'><Link to='/show_account'>Show Account</Link></button>
                    <button className='btn nav-btn'><Link to='/transactions'>Transactions</Link></button>
                </div>


            </div>
        </div>

    );
};
export default Header;
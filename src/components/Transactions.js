import React from 'react';
import { Link } from 'react-router-dom';

const Transitions = () => {
    return (
        <div className="container-fluid main_div">
                <div className='title'>
                    <h1>Transaction Details</h1>
                </div>
            <button className='btn'><Link to='/all_deposits'>Show All Deposits</Link></button>
            <hr />
            <button className='btn'><Link to='/all_withDraws'>Show All WithDraws</Link></button>
            <hr />
            <button className='btn'><Link to='/'>Home</Link></button> 
        </div>
    );
};
export default Transitions;
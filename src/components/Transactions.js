import React from 'react';
import { Link } from 'react-router-dom';

const Transitions = () => {
    return (
        <div>
            <h1>Transaction Details</h1>
            <button><Link to='/all_deposits'>Show All Deposits</Link></button>
            <hr />
            <button><Link to='/all_withDraws'>Show All WithDraws</Link></button>

        </div>
    );
};
export default Transitions;
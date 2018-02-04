import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AddAccount from './Add';
import ConnectedList from './Show';

const BankApplication = () => {
    return (
        <div>
          <AddAccount /><hr />
          <ConnectedList />
        </div>
    );
};




export default BankApplication;
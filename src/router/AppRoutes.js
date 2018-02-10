import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BankApplication from '../components/BankApplication';
import Header from '../components/Header';
import AddAccount from '../components/Add';
import ShowAccounts from '../components/Show';
import Transactions from '../components/Transactions';
import ShowDepositAmount from '../components/showDepositAmount';
import showWithDrawsAmount from '../components/showWithDrawsAmount';
const AppRoute = () => {
    return (
        <Router>
            <div className='main_div container-fluid'>
                <Header />
                <div>
                <Route path='/' component={BankApplication}  exact={true}/>
                <Route path='/add_account' component={AddAccount} />
                <Route path='/show_account' component={ShowAccounts}  />
                <Route path='/transactions' component={Transactions} />
                <Route path='/all_deposits' component={ShowDepositAmount} />
                <Route path='/all_withDraws' component={showWithDrawsAmount} />
                </div>
              
            </div>
        </Router>
    );
}

export default AppRoute;
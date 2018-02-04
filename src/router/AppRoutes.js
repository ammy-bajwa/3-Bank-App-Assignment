import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import AddAccount from '../components/Add';
import ShowAccounts from '../components/Show';
import Transactions from '../components/Transactions';
import ShowDepositAmount from '../components/showDepositAmount';
import showWithDrawsAmount from '../components/showWithDrawsAmount';
const AppRoute = () => {
    return (
        <Router>
            <div className='main_div'>
                <Header />
                <div className='center'>
                    <div className='btn_div'>
                        <button className='btn'><Link to='/add_account'>Add Account</Link></button>
                        <button className='btn'><Link to='/show_account'>Show Account</Link></button>
                        <button className='btn'><Link to='/transactions'>Transactions</Link></button>
                    </div>
                </div>
                <Route path='/' />
                <Route path='/add_account' component={AddAccount} />
                <Route path='/show_account' component={ShowAccounts} />
                <Route path='/transactions' component={Transactions} />
                <Route path='/all_deposits' component={ShowDepositAmount} />
                <Route path='/all_withDraws' component={showWithDrawsAmount} />

            </div>
        </Router>
    );
}

export default AppRoute;
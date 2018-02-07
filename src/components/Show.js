import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DepositAmount from './depositAmount';
import WithDrawAmount from './withDrawAmount'
import { depositAmount } from '../actions/account';
import { withDrawAmount } from '../actions/account';
import { removeAccount } from '../actions/account';
import EditAccount from './EditAccount';


const AccountList = (props) => (
    <div className='main_div container-fluid'>
        <div className='show_title container-fluid'>
            <h1>Account List</h1>
        </div>
        <div className='show_title container-fluid'>
            {props.accounts.length == 0 ? <h2>There is no account</h2> : ''}
        </div>
        {props.accounts.map((account, index) => {
            return (
                <Router key={index}>
                    <div className='container-fluid'>
                        <div className='account_div container-fluid'>
                            <h3><b>User Name:</b> {account.name}</h3>
                            <h3><b>User Amount:</b> {account.amount}</h3>
                            <h3><b>Account Type:</b> {account.type}</h3>
                            <h3><b>User Id:</b> {account.id}</h3>
                            <button className='btn account_btn'>
                                <Link to='/edit'>Edit Account</Link>
                            </button>
                            <button className='btn account_btn'>
                                <Link to='/deposit'>Deposit Amount</Link>
                            </button>
                            <button className='btn account_btn'>
                                <Link to='/withDraw'>Withdraw Amount</Link>
                            </button>                                                      
                            <button onClick={() => {
                                props.dispatch(removeAccount(account.id))
                            }}
                                className='btn account_btn'
                            >Remove Account</button><br />
                        </div>
                        <Route path='/deposit' component={
                            () => (<DepositAmount
                                onSubmit={(userAmount) => {
                                    // console.log(userAmount);
                                    let deposit = parseFloat(userAmount);
                                    props.dispatch(
                                        depositAmount(account.id, deposit));
                                }}
                                account={account} />)} exact={true} />
                        <Route path='/withDraw'
                                component={() => (<WithDrawAmount
                                    onSubmit={(userAmount) => {
                                        // console.log(userAmount);
                                        let withDraw = parseFloat(userAmount);
                                        if (withDraw > account.amount) {
                                            return alert('enter valid amount')
                                        }
                                        props.dispatch(
                                            withDrawAmount(account.id, withDraw));
                                    }}
                                />)} exact={true} />
                        <Route path='/edit' component={
                            () => (<EditAccount id={account.id} />)}
                            exact={true} />
                    </div>
                </Router>


            );
        })}
        <button className='btn'><Link to='/'>Home</Link></button>
    </div>
);

const mapStateToPros = (state) => {
    return {
        accounts: state
    }
};
export default connect(mapStateToPros)(AccountList);
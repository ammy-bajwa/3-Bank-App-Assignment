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
    <div>
        <h1>Account List</h1>
        {props.accounts.map((account, index) => {
            return (
                <Router key={index}>
                    <div>
                        <Link to='/edit'><h3><b>User Name:</b> {account.name}</h3></Link>
                        <p><b>User Amount:</b> {account.amount}</p>
                        <p><b>Account Type:</b> {account.type}</p>
                        <p><b>User Id:</b> {account.id}</p>
                        <button><Link to='/deposit'>Deposit Amount</Link></button>
                        <button><Link to='/withDraw'>Withdraw Amount</Link></button>
                        <Route path='/deposit' component={() => (<DepositAmount
                            onSubmit={(userAmount) => {
                                // console.log(userAmount);
                                let deposit = parseFloat(userAmount);
                                props.dispatch(depositAmount(account.id, deposit));
                            }}
                            account={account} />)} />
                        <Route path='/withDraw' component={()=>(<WithDrawAmount
                            onSubmit={(userAmount)=>{
                                // console.log(userAmount);
                                let withDraw = parseFloat(userAmount);
                                props.dispatch(withDrawAmount(account.id,withDraw));
                            }}
                            />)} />
                        <Route path='/edit' component={()=>(<EditAccount id={account.id} />)} />
                        <button onClick={()=>{
                            props.dispatch(removeAccount(account.id))
                        }}>Remove Account</button><br />
                    </div>
                </Router>
            );
        })}
        <button><Link to='/'>Go Home</Link></button> 
    </div>
);

const mapStateToPros = (state) => {
    return {
        accounts: state
    }
};
export default connect(mapStateToPros)(AccountList);

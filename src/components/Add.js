import React from 'react';
import { connect } from 'react-redux'
import AccountForm from './AccountForm';
import { addAccount } from '../actions/account';

const AddAccount = (props) => (
    <div>
        <AccountForm onSubmit={(account) => {
            console.log(account);
            props.dispatch(addAccount(account));
            props.history.push('/');
        }} />
    </div>
);

export default connect()(AddAccount);
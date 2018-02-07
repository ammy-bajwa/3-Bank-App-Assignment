import React from 'react';
import { connect } from 'react-redux';
import AccountForm from './AccountForm'
import {editAccount} from '../actions/account'
const EditAccount = (props) => (
    <div>
        <AccountForm
        account = {props.account}
        onSubmit={(account)=>{
            props.dispatch(editAccount(props.account.id,account));
            console.log('Updated',account);           
        }}
        />
    </div>
);
const mapStateToProps = (state, props) => {
    return{
    account: state.find((account) => {
        return account.id == props.id
    })
}
}
export default connect(mapStateToProps)(EditAccount);
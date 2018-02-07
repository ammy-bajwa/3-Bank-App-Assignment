import React from 'react';
import { Link } from 'react-router-dom';


class AccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.account ? props.account.name : '',
            userPassword: props.account ? props.account.password : '',
            userAmount: props.account ? props.account.amount : '',
            accountType: props.account ? props.account.type : ''
        }
    };
    onChangeUserName = (e) => {
        const userName = e.target.value;
        this.setState(() => ({ userName }));
    };
    onChangeUserPassword = (e) => {
        const userPassword = e.target.value;
        this.setState(() => ({ userPassword }));
    };
    onChangeUserAmount = (e) => {
        const userAmount = e.target.value;
        this.setState(() => ({ userAmount }));
    };
    onChangeAccountType = (e) => {
        const accountType = e.target.value;
        console.log(accountType);
        this.setState(() => ({ accountType }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.accountType) {
            alert('Please Select Account Type!')
        }
        else {
            console.log('Submitted Successfully');
            this.props.onSubmit({
                name: this.state.userName,
                password: this.state.userPassword,
                amount: parseFloat(this.state.userAmount),
                type: this.state.accountType
            })
        }
    };
    render() {
        return (
            <div className='main-div container-fluid'>
                <div className="form_title">
                    <h2>Add Account Details</h2>
                </div>
             <form onSubmit={this.onSubmit}>
                    <div className='form_main_div'>
                        <div className='inputs_div'>
                            <input type='text'
                                name='userName'
                                className="input"
                                placeholder='Enter Name'
                                value={this.state.userName}
                                onChange={this.onChangeUserName}
                                required
                            />
                            <input type='password'
                                className="input"
                                placeholder='Enter Password'
                                value={this.state.userPassword}
                                onChange={this.onChangeUserPassword}
                                required
                            />
                            <input type='number'
                                className="input"
                                placeholder='Enter Amount'
                                value={this.state.userAmount}
                                onChange={this.onChangeUserAmount}
                                required
                            />
                            <div className="form-group">
                                <label>
                                    <select name='accountType'
                                        className='form-control'
                                        value={this.state.accountType}
                                        onChange={this.onChangeAccountType}
                                        required
                                    >
                                        <option>Select Account Type</option>
                                        <option>Current Account</option>
                                        <option>Saving Account</option>
                                    </select>
                                </label>
                            </div>
                        </div>


                        <button className='btn'>Add Account</button>
                    </div>

                </form>
                <button className='btn'><Link to='/'>Home</Link></button>
            </div>
        );
    }
}


export default AccountForm;
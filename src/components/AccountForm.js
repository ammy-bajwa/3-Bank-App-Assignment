import React from 'react';


class AccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.account ? props.account.name : '',
            userPassword: props.account ? props.account.password : '',
            userAmount: props.account ? props.account.amount : '',
            accountType:props.account ? props.account.type : ''
        }
    };
    onChangeUserName = (e) => {
        const userName = e.target.value;
        this.setState(() => ({ userName }))
    };
    onChangeUserPassword = (e) => {
        const userPassword = e.target.value;
        this.setState(() => ({ userPassword }))
    };
    onChangeUserAmount = (e) => {
        const userAmount = e.target.value;
        this.setState(() => ({ userAmount }));
    };
    onChangeAccountType = (e) => {
        const accountType = e.target.value;
        console.log(accountType);
        this.setState(()=>({accountType}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.userName ||!this.state.userPassword ||!this.state.userAmount || !this.state.accountType)
        {
            alert('Please Enter Values Currectly')
        }
        else {
            console.log('Submitted Successfully');
            this.props.onSubmit({
                name:this.state.userName,
                password:this.state.userPassword,
                amount:parseFloat(this.state.userAmount),
                type:this.state.accountType
            })
        }
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text'
                        name='userName'
                        placeholder='Enter Your Name'
                        value={this.state.userName}
                        onChange={this.onChangeUserName}
                    />
                    <input type='password'
                        placeholder='Password'
                        value={this.state.userPassword}
                        onChange={this.onChangeUserPassword}
                    />
                    <input type='number'
                        placeholder='Amount'
                        value={this.state.userAmount}
                        onChange={this.onChangeUserAmount}
                    />
                    <label>
                    <select name='accountType'
                    value={this.state.accountType}
                    onChange={this.onChangeAccountType}
                    >
                        <option>Select Account Type</option>
                        <option>Current Account</option>
                        <option>Saving Account</option>
                    </select>
                    </label>
                    <button>Add Account</button>
                </form>
            </div>
        );
    }
}


export default AccountForm;
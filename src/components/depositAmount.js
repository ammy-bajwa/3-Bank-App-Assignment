import React from 'react';
import {Link} from 'react-router-dom';

const depositArr = []
class DepositAmount extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        const userAmount = e.target.elements.deposit.value;
        depositArr.push(userAmount);
        console.log(depositArr);
        const localdepositArr = JSON.stringify(depositArr);
        localStorage.setItem('depositArr',localdepositArr);
        return this.props.onSubmit(userAmount)

    };
    render() {
        return (
            <div className='main_div container-fluid'>
            <div className='title'><h1>Deposit Amount</h1></div>
                <form onSubmit={this.onSubmit}>
                    <input type='number' className='input' placeholder='Deposit Amount' name='deposit' />
                    <button type='submit' className='btn' id='Deposit_btn'>Deposit</button>
                    <button className='btn'><Link to='/show_account'>Ok</Link></button>
                </form>
            </div>
        );
    }
}

export default DepositAmount
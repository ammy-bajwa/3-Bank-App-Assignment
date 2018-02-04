import React from 'react';

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
            <div>
                <h1>Deposit Amount</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='number' placeholder='Deposit Amount' name='deposit' />
                    <button type='submit'>Deposit</button>
                </form>
            </div>
        );
    }
}

export default DepositAmount
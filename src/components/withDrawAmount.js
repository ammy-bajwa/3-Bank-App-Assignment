import React from 'react';

const withDrawArr = []
class WithDrawAmount extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        const userAmount = e.target.elements.withDraw.value;
        withDrawArr.push(userAmount);
        console.log(withDrawArr);
        const localWithDrawArr = JSON.stringify(withDrawArr);
        localStorage.setItem('withDrawArr',localWithDrawArr);
        this.props.onSubmit(userAmount)
         
    }
    render() {
        return (
            <div>
                <h1>withDraw Amount</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='number' placeholder='withDraw Amount' name='withDraw'/>
                    <button type='submit'>WithDraw Amount</button>
                </form>
            </div>
        );
    }
}

export default WithDrawAmount;
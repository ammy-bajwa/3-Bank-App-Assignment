import React from 'react';
import {Link} from 'react-router-dom';

const withDrawArr = []
class WithDrawAmount extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        const userAmount = e.target.elements.withDraw.value;
        withDrawArr.push(userAmount);
        console.log(withDrawArr);
        const localWithDrawArr = JSON.stringify(withDrawArr);
        localStorage.setItem('withDrawArr', localWithDrawArr);
        this.props.onSubmit(userAmount)

    }
    render() {
        return (
            <div className="container-fluid main_div">
                <div className='title'>
                    <h1>WithDraw Amount</h1>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input type='number' className='input' placeholder='withDraw Amount' name='withDraw' />
                    <button className="btn" id='withDraw_btn' type='submit'>WithDraw</button>
                    <button className='btn'><Link to='/show_account'>Ok</Link></button>
                </form>
            </div>
        );
    }
}

export default WithDrawAmount;
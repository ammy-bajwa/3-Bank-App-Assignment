import React from 'react';
import { Link } from 'react-router-dom';


class ShowDepositAmount extends React.Component {
    state = {
        depositArr: JSON.parse(localStorage.getItem('depositArr'))
    }
    render() {
        return (
            <div className="container-fluid main_div">
                <div className='title'>
                    <h1>Deposit Details</h1>
                </div>
                <ul>
                    {this.state.depositArr == null ? <h2>There is no deposit details </h2> : this.state.depositArr.map((deposit, index) => {
                        return (
                            <div key={index}>
                                <li><h4>{`Deposit number ${index + 1} is ${deposit}`}</h4></li>
                            </div>
                        );
                    })}
                </ul>
                <button className="btn"><Link to='/'>Home</Link></button>
                <hr />

            </div>
        );
    };
};
export default ShowDepositAmount;
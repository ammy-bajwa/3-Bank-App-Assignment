import React from 'react';
import {Link} from 'react-router-dom';


class ShowDepositAmount extends React.Component {    
    state={
        depositArr:JSON.parse(localStorage.getItem('depositArr'))
    }
    render() {
        return (
            <div>
                <h1>All Deposits Details</h1>
                <ol>
                {this.state.depositArr.map((deposit,index)=>{
                    return(
                        <div key={index}>
                            <li>{`Deposit number ${index+1} is ${deposit}`}</li>
                        </div>
                    );
                })}
                </ol>
                <button><Link to='/'>Go Home</Link></button> 
                <hr />

            </div>
        );
    };
};
export default ShowDepositAmount;
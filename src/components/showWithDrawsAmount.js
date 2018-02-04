import React from 'react';
import {Link} from 'react-router-dom';

class showWithDrawsAmount extends React.Component {    
    state={
        withDrawArr:JSON.parse(localStorage.getItem('withDrawArr'))
    }
    render() {
        return (
            <div>
                <h1>All WithDraw Details</h1>
                <ol>
                {this.state.withDrawArr.map((withDraw,index)=>{
                    return(
                        <div key={index}>
                            <li>{`WithDraw number ${index+1} is ${withDraw}`}</li>
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
export default showWithDrawsAmount;
import React from 'react';
import {Link} from 'react-router-dom';

class showWithDrawsAmount extends React.Component {    
    state={
        withDrawArr:JSON.parse(localStorage.getItem('withDrawArr'))
    }
    render() {
        return (
            <div className="container-fluid main_div">
                <div className='title'>
                    <h1>All WithDraw Details</h1>
                </div>
                <ul>
                {this.state.withDrawArr == null ? <h2>There is no withDraw details </h2> : this.state.withDrawArr.map((withDraw,index)=>{
                    return(
                        <div key={index}>
                            <li><h4>{`WithDraw number ${index+1} is ${withDraw}`}</h4></li>
                        </div>
                    );
                })}
               
                </ul>
                <button className='btn'><Link to='/'>Home</Link></button> 
                <hr />
            </div>
        );
    };
};
export default showWithDrawsAmount;
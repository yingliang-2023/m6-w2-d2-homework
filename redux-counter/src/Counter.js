import React from 'react';
import {connect} from 'react-redux';
import './App.css';


class Counter extends React.Component {
    // state = {count:0};
    

    increment = ()=>{
        // this.setState({
        //     count:this.state.count+1
        // })
        this.props.dispatch({type:'INCREMENT'})
    };

    decrement = ()=>{
        // this.setState({
        //     count:this.state.count1
        // })
        this.props.dispatch({type:'DECREMENT'})
    };

    reset = ()=>{
        // this.setState({
        //     count:this.state.count1
        // })
        this.props.dispatch({type:'RESET'})
    };


    render() {
        return (
            <div>
                <h2>Counter</h2>
 
                <div className='counterDiv'>
                     <span>{this.props.count}</span>
                     <button onClick={this.decrement}>-</button>
                     <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

//Add the mapStateToProps function:
function mapStateToProps(state) {
    return {
        count:state.count
    }
};


export default connect(mapStateToProps)(Counter);
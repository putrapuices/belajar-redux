import React from "react";
import {connect} from 'react-redux';
function Counter(props){

    console.log('render =>',props);
    return(
        <div>
            <h1>Saya mesin penghitung</h1>
            <p>Count:{props.count}</p>
            <button onClick = {props.onIncrementClick}>Increment</button>
            <button onClick = {props.onDecrementClick}>Decrement</button>
        </div>
    )
}

function mapStatetoProps(state){
    console.log('mapStatetoProps',state);
    return{
        count:state.count
    }
}

function mapDispatchtoProps(dispatch){

    return{
        onIncrementClick : () =>{
        console.log('tombol INCREMENET di Cklick');
        const action = {type:'INCREMENT'};
        dispatch(action);
        },
        onDecrementClick : () =>{
            console.log('tombol decrement di cklick');
            const action = {type:'DECREMENT'};
            dispatch(action);
            }
        }

}

export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);
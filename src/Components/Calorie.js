import React from 'react';
import {hereIsANumber} from './Form';


let hideStyle = '';
let cal = hereIsANumber();


class Calorie extends React.Component{
    
    render() {
    if (cal === 0){
        hideStyle = {display: 'none'};
    }
    else {
        hideStyle = {display: 'block'};
    }

        return (
            <div className='cal-total-container' style={hideStyle}>
                <h2>Your Basic Metabolic Rate is...</h2>
                <div className='bmr-calorie' >
                    {hereIsANumber()} calories
                </div>
            </div>
        );
    }
}
export default Calorie;
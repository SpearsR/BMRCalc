import React from 'react';



let url = window.location.search;
const urlParams = new URLSearchParams(url);



//Declaring Variables
let weight = urlParams.get('weight');
let feet = urlParams.get('height');
let inches = urlParams.get('inches');
let age = urlParams.get('age');
let gender = urlParams.get('gender');

//Conversion to metric
let height = ((feet*12) + inches) / 2.54;
let kgweight =  (weight * 0.453592);

let calorieTotal = 0;
function countCalorie(w, h, a){
    if(gender === 'male'){
        calorieTotal = (10*w) + (6.25*h) - (5*a) + 5;
        return calorieTotal;
    }
    else{
        calorieTotal = (10*w) + (6.25*h) - (5*a) - 161;
        return calorieTotal;
    }

    
};

function onloadPage() {
    if(url === ''){
        console.log('null is passed');
    }
    else{
        calorieTotal = countCalorie(kgweight, height, age);
        calorieTotal = Math.round(calorieTotal);
        console.log(calorieTotal);
    }
}


function genderCheck(gender){
    if(gender === null){
        console.log('null on gender');
    }
    else if (gender === 'male'){
        
    }
}
onloadPage();
genderCheck(gender);




export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

    }

    render(){
        return (
        <form className="main-form" action="index.html" method="GET">
        <label id='feetlabel' for="infeet">Height</label>
        <input type="number" name="height" id="infeet" placeholder="feet" />
        <br/>
    
        <input type="number" name="inches" id="ininch" placeholder="inches" />
        <label id="incheslabel" for="ininch"></label>
        <br/>
    
        <label for="age">Age</label>
        <input type="number" name="age" id="age" placeholder="years" />
        <br/>
    
        <label for="weight">Weight</label>
        <input type="number" name="weight" id="weight" placeholder="pounds" />
        <br/>
    
        <label>Gender</label>
        <div className="genderanswer">
            <div className='gender-container'>
                <input type="radio" id="male" name="gender" value="male"/>
                <label for="male">M</label>
            </div>
            <div className='gender-container'>
                <input type="radio" id="female" name="gender" value="female"/>
                <label for="female">F</label>
            </div>
        </div>
        <input type="reset" id="reset-box"/>
        <input type="submit" value="Submit" id="submit-box"/>
    </form>
        );
    }
}





console.log(`This is from form js ${calorieTotal}`)
export function hereIsANumber(){
    return calorieTotal;
}

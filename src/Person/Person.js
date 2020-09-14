import React from 'react';
import Radium from 'radium';
import './Person.css';

/*
EXAMPLE 1: hard core age value
const person = () => {
    return <p>Hi Friends age is 30 </p>
};
*/


/* EXAMPLE 2: Dynamic value by single expression 
const person = () => {
    return <p>Hi Friends age is {Math.floor(Math.random() * 30)}</p>
};
*/

/* EXAMPLE 3: Dynamic value by passing in the component
            props: All attributes used in the component 


const person = (props) => {
    return <p> Hi, I'm {props.name} and my age is {props.age}.</p>
};
*/


/* EXAMPLE 3: Dynamic value by passing in the component with Multiple Line using ()
            props: All attributes used in the component 
            props.children : it used to display innerHTML for the component 
            Only one Parent tag used in the multi line component.
*/

const person = (props) => {
    const personstyle = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }
    return (
        <div className="Person" style={personstyle}>
            <p onClick={props.click}> Hi, I'm {props.name} and my age is {props.age}.</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};



export default Radium(person);
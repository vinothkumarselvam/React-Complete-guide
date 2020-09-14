import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';
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

const StyleDiv = styled.div`

    width: 60%;
    margin: 18px auto;
    border: 1px solid #eee;
    -webkit-box-shadow: 0 2px 3px #ccc;
    box-shadow: 0 7px 20px #ccc;
    padding: 16px;
    text-align: center


@media (min-width: 500px):{
    width: '450px'
}`;

const person = (props) => {

    return (
        <StyleDiv>
            <p onClick={props.click}> Hi, I'm {props.name} and my age is {props.age}.</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyleDiv>
    )
};



export default person;
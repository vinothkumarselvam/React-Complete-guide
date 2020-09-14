import React from 'react';
import './UserOutput.css';

const UserOutput = (props) =>{
    return (
        <div className="cards">
            <p>Username: {props.userName}</p>
            <p>Designation: {props.designation}</p>
        </div>
    )
};

export default UserOutput;

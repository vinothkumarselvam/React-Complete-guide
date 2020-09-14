import React from 'react';
import '../UserOutput/UserOutput.css';

const UserInput = (props) => {
    const buttonStyle = {
        color: 'brown',
      };
  

    return (
        <div style={buttonStyle} className="inputCards">
            <p>Enter Your Name: <input type="text" onChange={props.namechange} value={props.userName} /></p>
            <p>Enter Your Designation: <input type="text" onChange={props.designationchange}  value={props.designation}/></p>
        </div>
    )
};
export default UserInput;
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color:white;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      
      &:hover {
        background-color: ${props => props.alt ? 'lightred' : 'lightgreen'};
        color:black;
      }
`;


class AppList extends Component {
  state = {
    persons : [
      { id:'1', name: 'Vinoth', age: '27' },
      { id:'2', name: 'Kishore', age: '28' },
      { id:'3', name: 'Dinesh', age: '27' }
    ],
    showPerson:false
  }



  // Onchange Event handler
    nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    console.log("index: "+personIndex);
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // New ES6 operator "rest operator"
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

};


  // Hide and show Persons cards
  toggleHandler = () => {
    const doesshow = this.state.showPerson;
    this.setState({showPerson : !doesshow});
  };

  render() {
    // const buttonStyle = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   textAlign: 'right',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color:'black'
    //   }
    // };

    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
            {
                this.state.persons.map((person, index) => {
                return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id} 
                    changed={(event) => this.nameChangedHandler(event, person.id)} 
                    />
                })
            }
        </div>

      )

      // buttonStyle.backgroundColor = "red";
      // buttonStyle[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color:'black'
      // }; 

    }

    const paraClass = [];
    if(this.state.persons.length <= 2){
      paraClass.push('red');
    } 
    if(this.state.persons.length <= 1){
      paraClass.push('bold');
    }

    if(this.state.persons.length < 1){
      paraClass.pop('bold');
      paraClass.pop('red');
    }

    return (
        // <StyleRoot>
          <div className="App">
              <h1>Welcome Vinoth </h1> 
              <p className={paraClass.join(" ")}>Good Morning !!!!</p>
              <StyledButton alt={this.state.showPerson} onClick={this.toggleHandler} >Toggle Person</StyledButton>
  
              {person}     
          </div>
       
    );
  }

}


//export default Radium(AppList);
export default AppList;

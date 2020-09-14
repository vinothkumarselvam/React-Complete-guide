import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
/*
class App extends Component {
  render() {
   
    EXAMPLE 1: JSX method using directly html in the js  
    return (
      <div className="App">
        <h1>Welcome Vinoth </h1> 
        <p>Good Morning !!!!</p>
        <Person name="Vinoth" age="27" />
        <Person name="Kishore" age="28"> My Hobbies are Playing Cricket.</Person>
        <Person name="Dinesh" age="27"><h3>My Hobbies are Playing Chess.</h3></Person>
      </div>
    );
   
   

    //EXAMPLE 2: Create Element Using Javascript with nested element creation
    return React.createElement('div',{className:'App'},React.createElement('h1',null,'Welcome Vinoth'));
    

  }
} 
*/

// EXAMPLE 3: Using the STATE in React


class AppExample extends Component {
  state = {
    persons : [
      { name: 'Vinoth', age: '27' },
      { name: 'Kishore', age: '28' },
      { name: 'Dinesh', age: '27' }
    ],
    showPerson:false
  }

  switchNameHandler = (newName) =>{
     //console.log('Testing');
    // DON"T Use this.state.persons[0].name = "vinoth Kumar";
    // React have special method to set value is this.setState();

    this.setState({
      persons : [
        { name:  'Vinoth', age: '27' },
        { name:  newName, age: '28' },
        { name: 'Dinesh', age: '27' }
      ]
    })

  };

  // Onchange Event handler
  nameChangedHandler = (event) => {
    
    this.setState({
      persons : [
        { name:  'Vinoth', age: '27' },
        { name:  event.target.value, age: '28' },
        { name: 'Dinesh', age: '27' }
      ]
    })
    
  };




  /*
    onClick Event   
      1, letter "C" is uppercase in the onClick word.
      2, don't use () end of the function.
  
  render() {
    return (
      <div className="App">
        <h1>Welcome Vinoth </h1> 
        <p>Good Morning !!!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies are Playing Cricket.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My Hobbies are Playing Chess.</Person>
      </div>
    );
  }
  */

  /* 
    Example 2: onlick event 
    Passing Method References Between Components
  */
  toggleHandler = () => {
    const doesshow = this.state.showPerson;
    this.setState({showPerson : !doesshow});
  };

  render() {
    const buttonStyle = {
      backgroundColor:'white',
      color: 'black',
      border: '1px solid black',
      paddine: '8px',
      cursor: 'pointer',
      textAlign: 'right'
    };

    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
          {
            this.state.persons.map(item => {
              return <Person 
                name={item.name} 
                age={item.age} />
            })
          }

          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />

          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Kishore Deepa')}
            changed={this.nameChangedHandler}
            >  My Hobbies are Playing Cricket.
          </Person>

          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this,'Dinesh single')} > 
            My Hobbies are Playing Chess.
          </Person> */}
        </div>

      )
    }


    return (
      <div className="App">
        <h1>Welcome Vinoth </h1> 
        <p>Good Morning !!!!</p>
        {/* <button 
          style={buttonStyle}
          onClick={() => this.switchNameHandler('Vinoth Suba!!')}>Switch Name</button> */}

          <button 
            style={buttonStyle}
            onClick={this.toggleHandler} >Toggle Swtich</button>
            {person}
              
      </div>
    );
  }

}














/*
    JSX Restriction:
    1, class is declare as className.
    2, Jsx contain one root element. 



   <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
*/

export default AppExample;

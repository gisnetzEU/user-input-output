import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {username: 'Lisa'}

  usernameChangeHandler = (event) => {
      this.setState(
        {username: event.target.value}
      )}

  render() {
    return (
      <div className="App">
        
          
          <UserInput changed={this.usernameChangeHandler} currentName={this.state.username}></UserInput>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName="Lisa"></UserOutput>
      </div>
    );
  }
}

export default App;

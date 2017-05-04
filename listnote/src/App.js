import React, { Component } from 'react';
import './App.css';
import List from './List';
import Form from './Form';



class App extends Component {
  render() {
    return (
      <div className="App">
       <List />
       <Form />

      </div>
    );
  }
}

export default App;

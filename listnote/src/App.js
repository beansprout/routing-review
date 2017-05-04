import React, { Component } from 'react';
import './App.css';
import List from './List';
import ListForm from './ListForm';

class App extends Component {
  render() {
    return (
      <div className="App">
       <List />
       <ListForm />

      </div>
    );
  }
}

export default App;

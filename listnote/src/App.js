import React, { Component } from 'react';
import './App.css';
import List from './List';
import { addData } from './actions';
import ListForm from './ListForm';
import { connect } from 'react-redux'

class App extends Component {
  submit (values) {
    console.log(values, this.props);
    values.id = this.props.list.length;
    this.props.addData(values)
    console.log('submit inside form')
    console.log('values: ', values);
  }
  render() {
    return (
      <div className="App">
       <List />
       <ListForm onSubmit={this.submit} />

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};


export default connect(mapStateToProps, { addData })(App);
